import User from "../../entities/user";
import userReopsitoryImpl from "../../frameworks/mongodb/repository/userRepositoryImpl";

const userRepositoryInterface = (repository: userReopsitoryImpl) => {
  const addNewUser = (data: User) => repository.addNewUser(data);
  const getUserDataWithUid = (uid: string) => repository.getUserDataWithUid(uid);
  const getUserDataWithEmail = (email: string) => repository.getUserDataWithEmail(email);
  const addNewFriend = (uid: string, uidToAdd: string) => repository.addNewFriend(uid, uidToAdd);
  const removeFromFriendList = (uid: string, uidToRemove: string) => repository.removeFromFriendList(uid, uidToRemove);
  const addNewBlockedUser = (uid: string, uidToBlock: string) => repository.addNewBlockedUser(uid, uidToBlock);
  const removeFromBLockedList = (uid: string, uidToUnblock: string) => repository.removeFromBLockedList(uid, uidToUnblock);

  return {
    addNewUser,
    getUserDataWithUid,
    getUserDataWithEmail,
    addNewFriend,
    removeFromFriendList,
    addNewBlockedUser,
    removeFromBLockedList,
  };
};

type userRepositoryInterface = ReturnType<typeof userRepositoryInterface>;
export default userRepositoryInterface;
