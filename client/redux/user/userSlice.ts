import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { RootState } from "../store";

type User = {
  _id: string;
  username: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  bio: string;
  followers: Array<string>;
  following: Array<string>;
  posts: Array<string>;
  createdAt: string;
  updatedAt: string;
  __v: string;
};

type Token = string;

type currentUser = {
  token: Token;
  user: User;
};

const initialState: currentUser = {
  token: "",
  user: {
    _id: "",
    username: "",
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    bio: "",
    followers: [],
    following: [],
    posts: [],
    createdAt: "",
    updatedAt: "",
    __v: "",
  },
};

export const userSlice = createSlice({
  name: "currentUser",
  initialState,

  reducers: {
    addCurrentUser(state: currentUser, action: PayloadAction<currentUser>) {
      state = action.payload;
    },
    removeCurrentUser(state: currentUser, action) {
      state = undefined;
    },
  },
});

// Export all of the actions:
export const { addCurrentUser, removeCurrentUser } = userSlice.actions;

// Create and export the selector:
export const useSelector_CurrentUser = (state: RootState) => state.currentUser;
export const useSelector: TypedUseSelectorHook<RootState> = rawUseSelector;

// It is a convention to export reducer as a default export:
export default userSlice.reducer;
