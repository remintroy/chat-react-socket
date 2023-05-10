interface User {
  username?: string;
  email?: string;
  password?: string;
  photoURL?: string;
  uid?: string;
  disabled?: boolean;
  friends?: [{ uid: string }];
  blocked?: [{ uid: string }];
}

class User {
  constructor({ username, email, password, photoURL, uid, disabled, friends, blocked }: User) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.photoURL = photoURL;
    this.uid = uid;
    this.disabled = disabled;
    this.friends = friends;
    this.blocked = blocked;
  }
}

export default User;
