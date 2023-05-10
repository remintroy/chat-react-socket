import User from "../../../entities/user";
import UserModel from "../models/user";

const userReopsitoryImpl = () => {
  const addNewUser = async ({ uid, email, password, username }: User) => {
    return await new UserModel({ uid, email, password , username}).save();
  };
  const getUserDataWithUid = async (uid: string) => {
    return await UserModel.findOne({ uid });
  };
  const getUserDataWithEmail = async (email: string) => {
    return await UserModel.findOne({ email });
  };
  const getUserDataWithUsername = async (username: string) => {
    return await UserModel.findOne({ username });
  };
  const addNewFriend = async (uid: string, friendUid: string) => {
    return await UserModel.updateOne({ uid }, { $push: { friends: friendUid } });
  };
  const removeFromFriendList = async (uid: string, friendUid: string) => {
    return await UserModel.updateOne({ uid }, { $pull: { friends: friendUid } });
  };
  const addNewBlockedUser = async (uid: string, uidToBlock: string) => {
    return await UserModel.updateOne({ uid }, { $push: { blocked: uidToBlock } });
  };
  const removeFromBLockedList = async (uid: string, uidToUnblockBlock: string) => {
    return await UserModel.updateOne({ uid }, { $pull: { blocked: uidToUnblockBlock } });
  };
  return {
    addNewUser,
    getUserDataWithUid,
    getUserDataWithEmail,
    getUserDataWithUsername,
    addNewFriend,
    removeFromFriendList,
    addNewBlockedUser,
    removeFromBLockedList,
  };
};

type userReopsitoryImpl = ReturnType<typeof userReopsitoryImpl>;

export default userReopsitoryImpl;
