ruleset jacebook {
  meta {
    shares __testing, login, getUsers, getPosts, getUserPosts, getAllFollowed, getProfile, aliasToUser, getPostsFromArray, getHashtag, getSearch
  }
  global {
    __testing = { "queries": [ { "name": "__testing" },
                              {"name" : "login", "args" : ["alias", "password"]},
                              {"name" : "getUsers"},
                              {"name" : "getPosts"},
                              {"name" : "getSearch"},
                              {"name" : "getPostsFromArray", "args" : ["ids"]},
                              {"name" : "getUserPosts", "args" : ["alias"]},
                              {"name" : "getHashtag", "args" : ["tag"]},
                              {"name" : "aliasToUser", "args" : ["alias"]},
                              {"name" : "getProfile", "args" : ["alias"]},
                              {"name" : "getAllFollowed", "args" : ["alias"]}
                              ],
                  "events": [
                    { "domain" : "user", "type" : "sign_up", "attrs": ["alias", "password", "firstName", "lastName"] },
                    { "domain" : "post", "type" : "create", "attrs": ["content", "alias"] },
                    { "domain" : "user", "type" : "follow", "attrs": ["alias", "followAlias"] },
                    { "domain" : "user", "type" : "unfollow", "attrs": ["alias", "unfollowAlias"] },
                    { "domain" : "fake", "type" : "store" }
                    ] }

    login = function(alias, password) {
      pass = (ent:users.get([alias, "password"]));
      (pass == password) => {"authToken" : ent:users.get([alias, "authtoken"]), "message" : "Login Successful", "photo" : ent:users.get([alias, "photo"]) } | {"authToken":"", "message" :"Invalid username or password."}
    }

    getSearch = function() {
      {
        "aliases" : ent:users.keys(),
        "hashtags" : ent:hashtags
      }
    }

    getUsers = function() {
      ent:users
    }

    getPosts = function() {
      ent:posts
    }

    getPostsFromArray = function(ids) {
      (ids.length() > 0) =>
      ids.map(function(x) {
        post = ent:posts.filter(function(y) {
          (y.values()[0]).get(["id"]) == x;
        })[0];

        {
          "photo" : post.values()[0].get(["photo"]),
          "alias" : post.keys()[0],
          "name" : post.values()[0].get(["name"]),
          "image" : post.values()[0].get(["image"]),
          "video" : post.values()[0].get(["video"]),
          "content" : post.values()[0].get(["content"]),
          "timestamp" : post.values()[0].get(["timestamp"]),
          "mentions" : post.values()[0].get(["mentions"]),
          "hashtags" : post.values()[0].get(["hashtags"]),
          "id" : x
        }

      }) | []
    }

    getHashtag = function(tag) {
      ent:posts.filter(function(x) {
        x.values()[0].get(["hashtags"]).has(tag)
      }).map(function(y){
        y.values()[0].get(["id"])
      })
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

    getAllFollowed = function(alias) {
      following = ent:users.get([alias, "imFollowing"]).append(alias);
      following.map(function(x) {
        ent:users.get([x, "posts"]);
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
      photo =  event:attr("photo");
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
    send_directive("login_status", {"message" : "account created", "authToken" : token, "photo" : photo});

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
      photo = event:attr("photo");
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
      image = event:attr("image");
      video = event:attr("video");
      urls = event:attr("urls");
      hashtags = event:attr("hashtags");
      mentions = event:attr("mentions");
      timestamp = time:now();

      name = ent:users.get([alias, "firstName"]) + " " + ent:users.get([alias, "lastName"]);
      photo = ent:users.get([alias, "photo"]);

      post = {}.put(alias, {
        "content" : content,
        "id" : id,
        "photo" : photo,
        "name" : name,
        "image" : image,
        "video" : video,
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

    rule unfollow_user {
    select when user unfollow

    pre {
      alias = event:attr("alias");
      unfollowAlias = event:attr("unfollowAlias");
    }

    if alias && unfollowAlias then noop();

    fired {
      ent:users := ent:users.set([alias, "imFollowing"], ent:users.get([alias, "imFollowing"]).filter(function(x){x!=unfollowAlias}));
      ent:users := ent:users.set([unfollowAlias, "myFollowers"], ent:users.get([unfollowAlias, "myFollowers"]).filter(function(x){x!=alias}));
    }

  }

  rule fake_store {
    select when fake store
    pre {
      users = {
  "CassO": {
    "password": "123",
    "firstName": "Cassie",
    "lastName": "OKeeffe",
    "authtoken": "ck1c577n10011q4tobrqzlak6",
    "photo": "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/57155037_100264351180970_1432501369947815936_n.jpg?_nc_cat=103&_nc_oc=AQnfDYARPsez5H0f4c4HJijK7XuvlTpKItfaSda28HYtFlsHQAduNJijZs27yLjUD0M&_nc_ht=scontent-lax3-1.xx&oh=e0ef84c1608f8546367184983f8305f9&oe=5E2C44C3",
    "posts": [
      "ck1c57rf10019q4tot2nwtpso",
      "ck1c58a0s001fq4tomb3hdpbw"
    ],
    "imFollowing": [],
    "myFollowers": []
  },
  "FratBoiBlack": {
    "password": "123",
    "firstName": "Michael",
    "lastName": "Black",
    "authtoken": "ck1c53eyx000eq4to7y0bgrbd",
    "photo": "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/38448873_1953444824714622_5916553050671022080_n.jpg?_nc_cat=105&_nc_oc=AQkmkIarEEsE0HPDzpUTiH1T-mEXZ0z3gOBmx7kuZ5U51Bd15V-R5NTwpCAefnD_4DM&_nc_ht=scontent-sea1-1.xx&oh=5df71708256fe8eaca9ba1c65eb1e288&oe=5E21FC2F",
    "posts": [
      "ck1c58vnl001oq4toecomxuna",
      "ck1c598kz001uq4toiqvtwc1u",
      "ck1c59oz90020q4toz5itk791"
    ],
    "imFollowing": [],
    "myFollowers": []
  },
  "JKandy": {
    "password": "123",
    "firstName": "Jace",
    "lastName": "Kandare",
    "authtoken": "ck1c5ajtz0025q4toori0kamn",
    "photo": "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/21369610_1994392743907945_6247112205324642498_n.jpg?_nc_cat=103&_nc_oc=AQlFNzRqf10dtSFTPUcs3F0qemyTrOhjknFznyvvQfi76DYO_qo_5H5QCk4jzwD2ZzE&_nc_ht=scontent-sea1-1.xx&oh=fe5f95fefbde0b351ed1fd632dfcb826&oe=5E29950C",
    "posts": [
      "ck1c5bbcq002cq4to278ofm83"
    ],
    "imFollowing": [],
    "myFollowers": []
  },
  "WannabeBruce": {
    "password": "123",
    "firstName": "Norbert",
    "lastName": "Martin",
    "authtoken": "ck1c54ek2000hq4toorn3kvmt",
    "photo": "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/57284496_2617771131626642_8670758566476382208_n.jpg?_nc_cat=108&_nc_oc=AQljeiFshKXRcZP9Gh16Gx6Sq55t-hFPoGGqm6mFy9NvkEpM1cN1V1dRI43fFm385So&_nc_ht=scontent-sea1-1.xx&oh=c179ae224d74c81c3b111835a51c295b&oe=5E386002",
    "posts": [
      "ck1c55a02000pq4toqgalrfnk",
      "ck1c56dqq000xq4to6iciobq2"
    ],
    "imFollowing": [],
    "myFollowers": []
  }
};

posts = [
  {
    "WannabeBruce": {
      "content": "Man I wish I was more like Bruce. Gotta get me them #picos",
      "id": "ck1c55a02000pq4toqgalrfnk",
      "photo": "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/57284496_2617771131626642_8670758566476382208_n.jpg?_nc_cat=108&_nc_oc=AQljeiFshKXRcZP9Gh16Gx6Sq55t-hFPoGGqm6mFy9NvkEpM1cN1V1dRI43fFm385So&_nc_ht=scontent-sea1-1.xx&oh=c179ae224d74c81c3b111835a51c295b&oe=5E386002",
      "name": "Norbert Martin",
      "image": null,
      "video": null,
      "urls": [],
      "hashtags": [
        "picos"
      ],
      "mentions": [],
      "timestamp": "2019-10-04T13:05:02.692Z"
    }
  },
  {
    "WannabeBruce": {
      "content": "Lowkey I've been wanting to retire too ever since @FratBoiBlack showed up.",
      "id": "ck1c56dqq000xq4to6iciobq2",
      "photo": "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/57284496_2617771131626642_8670758566476382208_n.jpg?_nc_cat=108&_nc_oc=AQljeiFshKXRcZP9Gh16Gx6Sq55t-hFPoGGqm6mFy9NvkEpM1cN1V1dRI43fFm385So&_nc_ht=scontent-sea1-1.xx&oh=c179ae224d74c81c3b111835a51c295b&oe=5E386002",
      "name": "Norbert Martin",
      "image": null,
      "video": null,
      "urls": [],
      "hashtags": [],
      "mentions": [
        "FratBoiBlack"
      ],
      "timestamp": "2019-10-04T13:05:54.194Z"
    }
  },
  {
    "CassO": {
      "content": "@JKandy is so hot",
      "id": "ck1c57rf10019q4tot2nwtpso",
      "photo": "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/57155037_100264351180970_1432501369947815936_n.jpg?_nc_cat=103&_nc_oc=AQnfDYARPsez5H0f4c4HJijK7XuvlTpKItfaSda28HYtFlsHQAduNJijZs27yLjUD0M&_nc_ht=scontent-lax3-1.xx&oh=e0ef84c1608f8546367184983f8305f9&oe=5E2C44C3",
      "name": "Cassie OKeeffe",
      "image": null,
      "video": null,
      "urls": [],
      "hashtags": [],
      "mentions": [
        "JKandy"
      ],
      "timestamp": "2019-10-04T13:06:58.574Z"
    }
  },
  {
    "CassO": {
      "content": "Dancing really isn't that cool.",
      "id": "ck1c58a0s001fq4tomb3hdpbw",
      "photo": "https://scontent-lax3-1.xx.fbcdn.net/v/t1.0-9/57155037_100264351180970_1432501369947815936_n.jpg?_nc_cat=103&_nc_oc=AQnfDYARPsez5H0f4c4HJijK7XuvlTpKItfaSda28HYtFlsHQAduNJijZs27yLjUD0M&_nc_ht=scontent-lax3-1.xx&oh=e0ef84c1608f8546367184983f8305f9&oe=5E2C44C3",
      "name": "Cassie OKeeffe",
      "image": null,
      "video": null,
      "urls": [],
      "hashtags": [],
      "mentions": [],
      "timestamp": "2019-10-04T13:07:22.684Z"
    }
  },
  {
    "FratBoiBlack": {
      "content": "AYYYOOOOO",
      "id": "ck1c58vnl001oq4toecomxuna",
      "photo": "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/38448873_1953444824714622_5916553050671022080_n.jpg?_nc_cat=105&_nc_oc=AQkmkIarEEsE0HPDzpUTiH1T-mEXZ0z3gOBmx7kuZ5U51Bd15V-R5NTwpCAefnD_4DM&_nc_ht=scontent-sea1-1.xx&oh=5df71708256fe8eaca9ba1c65eb1e288&oe=5E21FC2F",
      "name": "Michael Black",
      "image": null,
      "video": null,
      "urls": [],
      "hashtags": [],
      "mentions": [],
      "timestamp": "2019-10-04T13:07:50.722Z"
    }
  },
  {
    "FratBoiBlack": {
      "content": "@WannabeBruce AYYYYYYYOOOOOO #AYYOOO",
      "id": "ck1c598kz001uq4toiqvtwc1u",
      "photo": "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/38448873_1953444824714622_5916553050671022080_n.jpg?_nc_cat=105&_nc_oc=AQkmkIarEEsE0HPDzpUTiH1T-mEXZ0z3gOBmx7kuZ5U51Bd15V-R5NTwpCAefnD_4DM&_nc_ht=scontent-sea1-1.xx&oh=5df71708256fe8eaca9ba1c65eb1e288&oe=5E21FC2F",
      "name": "Michael Black",
      "image": null,
      "video": null,
      "urls": [],
      "hashtags": ["AYYOOO"],
      "mentions": [
        "WannabeBruce"
      ],
      "timestamp": "2019-10-04T13:08:07.475Z"
    }
  },
  {
    "FratBoiBlack": {
      "content": "Where them ladies at? #AYYOOO",
      "id": "ck1c59oz90020q4toz5itk791",
      "photo": "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/38448873_1953444824714622_5916553050671022080_n.jpg?_nc_cat=105&_nc_oc=AQkmkIarEEsE0HPDzpUTiH1T-mEXZ0z3gOBmx7kuZ5U51Bd15V-R5NTwpCAefnD_4DM&_nc_ht=scontent-sea1-1.xx&oh=5df71708256fe8eaca9ba1c65eb1e288&oe=5E21FC2F",
      "name": "Michael Black",
      "image": "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/61418807_10219674863648931_3905489473936293888_n.jpg?_nc_cat=105&_nc_oc=AQl54qvib7WGyo6FS4OtxXala1rXZN3P3oJmWbzNoZDRzJckf8l7HMBfZk3DPY5KRNo&_nc_ht=scontent-sea1-1.xx&oh=4add277970bad3a8a4ea6e2de8f70a68&oe=5E20F1F0",
      "video": null,
      "urls": [],
      "hashtags": [
        "AYYOOO"
      ],
      "mentions": [],
      "timestamp": "2019-10-04T13:08:28.726Z"
    }
  },
  {
    "JKandy": {
      "content": "Somebody gotta tell @FratBoiBlack to chill out.",
      "id": "ck1c5bbcq002cq4to278ofm83",
      "photo": "https://scontent-sea1-1.xx.fbcdn.net/v/t1.0-9/21369610_1994392743907945_6247112205324642498_n.jpg?_nc_cat=103&_nc_oc=AQlFNzRqf10dtSFTPUcs3F0qemyTrOhjknFznyvvQfi76DYO_qo_5H5QCk4jzwD2ZzE&_nc_ht=scontent-sea1-1.xx&oh=fe5f95fefbde0b351ed1fd632dfcb826&oe=5E29950C",
      "name": "Jace Kandare",
      "image": null,
      "video": null,
      "urls": [],
      "hashtags": [],
      "mentions": [
        "FratBoiBlack"
      ],
      "timestamp": "2019-10-04T13:09:44.379Z"
    }
  }
];

hashtags = ["picos","AYYOOO"];
    }

    always {
      ent:users := users;
      ent:posts := posts;
      ent:hashtags := hashtags;
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
