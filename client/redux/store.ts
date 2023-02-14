import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./post/postSlice";
import currentUserReducer from "./user/userSlice";

const store = configureStore({
  reducer: {
    currentUser: currentUserReducer,
    posts: postReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;

export default store;
