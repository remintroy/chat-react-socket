import { model } from "mongoose";
import userSchema from "./user.model";

const UserModel = model<userSchema>("users", userSchema);

export default UserModel;
