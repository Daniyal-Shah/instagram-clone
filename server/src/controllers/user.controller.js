import { UsersModel } from "../models/users/user.model.js";
import { PostsModel } from "../models/posts/post.model.js";
import { getJwtToken } from "../services/jwt.js";
import globalServices from "../services/global.services.js";
import path from "path";
import fs from "fs";

export const getUserProfile = async (userId) => {
  const user = await UsersModel.findById(userId);
  return user;
};

export const createUser = async (payload) => {
  const isExisting = await UsersModel.findOne({ email: payload.email });
  if (isExisting) {
    return globalServices.throwCustomError("Email already exist!", 409, {
      email: "Email already exist try a new email",
    });
  }
  const user = await UsersModel.create({
    username: payload.username,
    email: payload.email,
    password: payload.password,
  });

  return user;
};

export const loginUser = async (payload) => {
  const { password, username } = payload;

  const authUser = await UsersModel.findOne({ username });
  if (!authUser || !(await authUser.matchPassword(password))) {
    globalServices.throwCustomError("Wrong credentials. Try again", 400);
  }

  return {
    user: authUser,
    token: getJwtToken(authUser._id),
  };
};

export const updateProfile = async (userId, payload) => {
  const updatedUser = await UsersModel.updateOne({ _id: userId }, payload);

  return {
    updatedUser,
  };
};

export const followUser = async (id, userId) => {
  if (!userId) {
    globalServices.throwCustomError(
      "Userid is required, whom to follow. Try again",
      404
    );
  }
  const result = await Promise.all([
    UsersModel.updateOne({ _id: id }, { $addToSet: { following: userId } }),
    UsersModel.updateOne({ _id: userId }, { $addToSet: { followers: id } }),
  ]);

  return result;
};

export const unfollowUser = async (id, userId) => {
  if (!userId) {
    globalServices.throwCustomError(
      "Userid is required, whom to unfollow. Try again",
      404
    );
  }
  const result = await Promise.all([
    UsersModel.updateOne({ _id: id }, { $pull: { following: userId } }),
    UsersModel.updateOne({ _id: userId }, { $pull: { followers: id } }),
  ]);

  return result;
};

// Post
export const createPost = async (userId, payload) => {
  const __dirname = path.resolve();
  let filePath = path.join(__dirname + "/uploads/" + payload.filename);

  const result = await PostsModel.create({
    user: userId,
    caption: payload.caption,
    postImage: {
      data: fs.readFileSync(filePath),
      contentType: "image/png",
    },
  });
  return result;
};

export const getAllPosts = async (userId) => {
  if (!userId) {
    globalServices.throwCustomError("userid is required", 404);
  }
  const posts = await PostsModel.find({ user: userId });
  return posts;
};

export const getAllFollowersPosts = async (userId) => {
  if (!userId) {
    globalServices.throwCustomError("userid is required", 404);
  }
  const { following } = await UsersModel.findById(userId);

  const posts = await PostsModel.find({ user: { $in: following } });
  return posts;
};

export const updatePost = async (userId, payload) => {
  if (!userId) {
    globalServices.throwCustomError("userid is required", 404);
  }
  await PostsModel.updateOne({ _id: userId }, payload);
};

export const deletePost = async (userId, postId) => {
  if (!postId) {
    globalServices.throwCustomError("Postid is required", 404);
  }
  await PostsModel.deleteOne({ _id: postId });
};

export const likePost = async (userId, postId) => {
  if (!postId) {
    globalServices.throwCustomError("Postid is required", 404);
  }

  const post = await PostsModel.updateOne(
    { _id: postId },
    { $addToSet: { likes: userId } }
  );

  return post;
};

export const commentPost = async (userId, postId, comment) => {
  if (!postId) {
    globalServices.throwCustomError("Postid is required", 404);
  }

  const post = await PostsModel.updateOne(
    { _id: postId },
    { $addToSet: { comments: { user: userId, comment } } }
  );

  return post;
};
