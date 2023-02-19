import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from "react-redux";
import PostModel from "../../models/post.model";
import { RootState } from "../store";

const initialState: PostModel[] = [];

export const postSlice = createSlice({
  name: "posts",
  initialState,

  reducers: {
    addPost(state: PostModel[], action: PayloadAction<PostModel>) {
      state.push(action.payload);
    },
    removePost(state: PostModel[], action: PayloadAction<string>) {
      state = state.filter((item) => item._id !== action.payload);
    },
  },
});

// Export all of the actions:
export const { addPost, removePost } = postSlice.actions;

// Create and export the selector:
export const useSelector_Post = (state: RootState) => state.posts;

// It is a convention to export reducer as a default export:
export default postSlice.reducer;
