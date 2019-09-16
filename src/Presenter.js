import Model from "./Model";

export default class Presenter {
  constructor() {
    //The presenter has access to a model. In the actual implementation the model will be a singleton,
    this.model = new Model();
  }

//the login function gets the model data and checks if there is a user with the username and password
  login(user, password, callback) {
    let users = this.model.getUsers();
    console.log("Users", users[user]);
    if(users[user] !== null && users[user] === password) callback();
  }
}
