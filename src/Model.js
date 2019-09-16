export default class Model {
  //for now the model only has one user, and the data is fake. This will be a singleton in the real implementation
  getUsers() {
    return {"jace.kandare@yahoo.com" : "password"}
  }
}
