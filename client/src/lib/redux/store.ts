import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import themeSlice from "./themeSlice";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const store = configureStore({
  reducer: {
    user: userSlice,
    theme: persistReducer({ key: "user", storage }, themeSlice),
  },
});

export default store;

export const persistor = persistStore(store);
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
