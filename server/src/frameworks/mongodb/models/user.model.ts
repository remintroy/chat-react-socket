import { Schema } from "mongoose";

interface userSchema {
  name: string;
  email: string;
  password: string;
  photoURL: string;
  uid: string;
  disabled: boolean;
  friends: [{ uid: string }];
  blocked: [{ uid: string }];
}

const userSchema = new Schema({
  name: String,
  email: String,
  password: String,
  photoURL: String,
  uid: String,
  disabled: { type: Boolean, default: false },
  friends: [{ uid: String }],
  blocked: [{ uid: String }],
});

export default userSchema;
