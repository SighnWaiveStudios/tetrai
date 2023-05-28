class User {
  name: string = '';
  email: string = '';
  authenticated: boolean = false;

  populate(id) {
    // Check database for id
    return false;
  }

  store(userInfo) {

  }
}

export = User;