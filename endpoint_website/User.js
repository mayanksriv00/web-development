class User {
  constructor(name, email, pass, phone) {
    this.name = name;
    this.email = email;
    this.pass = pass;
    this.phone = phone;
  }
  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  getPassword() {
    return this.pass;
  }
  getPhone() {
    return this.phone;
  }
}

module.exports = User;