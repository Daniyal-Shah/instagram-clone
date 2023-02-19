import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from "react-redux";
import CurrentUserModel from "../../models/currentuser.model";

import { RootState } from "../store";

const initialState: CurrentUserModel = {
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
    addCurrentUser(
      state: CurrentUserModel,
      action: PayloadAction<CurrentUserModel>
    ) {
      state = action.payload;
    },
    removeCurrentUser(state: CurrentUserModel, action) {
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
