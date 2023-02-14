import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  useSelector as rawUseSelector,
  TypedUseSelectorHook,
} from "react-redux";
import { RootState } from "../store";

type Comment = {
  user: string;
  comment: string;
};

type Post = {
  _id: string;
  user: string;
  postImage: string;
  caption: string;
  comments: Comment[];
  likes: string[];
  createdAt: string;
  updatedAt: string;
};

const initialState: Post[] = [];

export const postSlice = createSlice({
  name: "posts",
  initialState,

  reducers: {
    addPost(state: Post[], action: PayloadAction<Post>) {
      state.push(action.payload);
    },
    removePost(state: Post[], action: PayloadAction<string>) {
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
