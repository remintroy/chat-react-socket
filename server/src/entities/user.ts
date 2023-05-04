interface User {
  name?: string;
  email?: string;
  password?: string;
  photoURL?: string;
  uid?: string;
  disabled?: boolean;
  friends?: [{ uid: string }];
  blocked?: [{ uid: string }];
}

class User {
  constructor({ name, email, password, photoURL, uid, disabled, friends, blocked }: User) {
    this.name = name;
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
