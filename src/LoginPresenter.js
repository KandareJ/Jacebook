import Model from "./LoginModel";

export default class LoginPresenter {
  constructor() {
    this.model = new LoginModel();
  }

  login(user, password, callback) {
    let users = this.model.getUsers();
    console.log("Users", users[user]);
    if(users[user] !== null && users[user] === password) callback();
  }


}
