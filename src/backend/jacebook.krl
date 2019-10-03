ruleset jacebook {
  meta {
    shares __testing, login, getUsers, getPosts, getUserPosts, getAllFollowed, getProfile, aliasToUser
  }
  global {
    __testing = { "queries": [ { "name": "__testing" },
                              {"name" : "login", "args" : ["alias", "password"]},
                              {"name" : "getUsers"},
                              {"name" : "getPosts"},
                              {"name" : "getUserPosts", "args" : ["alias"]},
                              {"name" : "aliasToUser", "args" : ["alias"]},
                              {"name" : "getProfile", "args" : ["alias"]},
                              {"name" : "getAllFollowed", "args" : ["alias"]}
                              ],
                  "events": [
                    { "domain" : "user", "type" : "sign_up", "attrs": ["alias", "password", "firstName", "lastName"] },
                    { "domain" : "post", "type" : "create", "attrs": ["content", "alias"] },
                    { "domain" : "user", "type" : "follow", "attrs": ["alias", "followAlias"] }
                    ] }

    login = function(alias, password) {
      pass = (ent:users.get([alias, "password"]));
      (pass == password) => {"authToken" : ent:users.get([alias, "authtoken"]), "message" : "Login Successful" } | {"authToken":"", "message" :"Invalid username or password."}
    }

    getUsers = function() {
      ent:users
    }

    getPosts = function() {
      ent:posts
    }



    getProfile = function(alias) {
      user = ent:users.get([alias]);
      {
        "alias" : alias,
        "name" : user.get(["firstName"]) + " " + user.get(["lastName"]),
        "photo" : user.get(["photo"]),
        "posts" :user.get(["posts"]),
        "following" : user.get(["imFollowing"]).map(aliasToUser),
        "followers" : user.get(["myFollowers"]).map(aliasToUser)
      }
    }

    aliasToUser = function(alias) {
      user = ent:users.get([alias]);
      {
        "name" : user.get(["firstName"]) + " " + user.get(["lastName"]),
        "alias" : alias,
        "photo" : user.get(["photo"])
      }
    }

    getUserPosts = function(alias) {
      ent:posts.filter(function(x){
        x.keys().head() == alias
      })
    }

    getAllFollowed = function(alias) {
      following = ent:users.get([alias, "imFollowing"]);
      following.map(function(x) {
        getUserPosts(x)
      }).reduce(function(a,b) {
        a.append(b)
      })
    }

  }

  rule sign_up {
    select when user sign_up

    pre {
      alias = event:attr("alias");
      password = event:attr("password");
      firstName = event:attr("firstName");
      lastName = event:attr("lastName");
      token = random:uuid();
      photo = "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/57155037_100264351180970_1432501369947815936_n.jpg?_nc_cat=103&_nc_oc=AQnfDYARPsez5H0f4c4HJijK7XuvlTpKItfaSda28HYtFlsHQAduNJijZs27yLjUD0M&_nc_ht=scontent-lax3-1.xx&oh=e0ef84c1608f8546367184983f8305f9&oe=5E2C44C3";
      map = {
            "password" : password,
            "firstName" : firstName,
            "lastName" : lastName,
            "authtoken" : token,
            "photo" : photo,
            "posts" : [],
            "imFollowing" : [],
            "myFollowers" : []
          }
    }

    if (alias && password && firstName && lastName && token && photo && ent:users.get([alias]) == null) then
    send_directive("login_status", {"message" : "account created", "authToken" : token});

    fired {
      ent:users := ent:users.defaultsTo({}).put(alias, map);
    }
  }

    rule sign_up_2 {
    select when user sign_up

    pre {
      alias = event:attr("alias");
      password = event:attr("password");
      firstName = event:attr("firstName");
      lastName = event:attr("lastName");
      token = random:uuid();
      photo = "photo";
      map = {
            "password" : password,
            "firstName" : firstName,
            "lastName" : lastName,
            "authtoken" : token,
            "photo" : photo,
            "posts" : [],
            "imFollowing" : [],
            "myFollowers" : []
          }
    }

    if (alias && password && firstName && lastName && token && photo && ent:users.get([alias]) != null) then
    send_directive("login_status", {"message" : "That alias is taken. Please try a different one.", "authToken" : ""});

  }

  rule create_post {
    select when post create

    pre {
      id = random:uuid();
      alias = event:attr("alias");
      content = event:attr("content");
      media = event:attr("media");
      urls = event:attr("urls");
      hashtags = event:attr("hashtags");
      mentions = event:attr("mentions");
      timestamp = time:now();

      post = {}.put(alias, {
        "content" : content,
        "id" : id,
        "media" : media,
        "urls" : urls,
        "hashtags" : hashtags,
        "mentions" : mentions,
        "timestamp" : timestamp
      });
    }

    if alias then noop();

    fired {
      ent:posts := ent:posts.defaultsTo([]).append(post);
      ent:users := ent:users.set([alias, "posts"], ent:users.get([alias, "posts"]).append(id));
      ent:mentions := ent:mentions.defaultsTo([]).append(mentions);
      ent:hashtags := ent:hashtags.defaultsTo([]).append(hashtags);
    }

  }

  rule follow_user {
    select when user follow

    pre {
      alias = event:attr("alias");
      followAlias = event:attr("followAlias");
    }

    if alias && followAlias then noop();

    fired {
      ent:users := ent:users.set([alias, "imFollowing"], ent:users.get([alias, "imFollowing"]).append(followAlias));
      ent:users := ent:users.set([followAlias, "myFollowers"], ent:users.get([followAlias, "myFollowers"]).append(alias))
    }

  }

}

/*
{ alias:
  {
    "password" : password,
    "firstname" : firstname,
    "lastname" : lastname,
    "authtoken" : uuid,
    "photo" : photo,
    "posts" : [],
    "imFollowing" : [],
    "myFollowers" : []
  }
}
*/
