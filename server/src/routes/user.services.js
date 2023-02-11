import asyncHandler from "express-async-handler";
import globalServices from "../services/global.services.js";
import * as userController from "../controllers/user.controller.js";

export const createUser = asyncHandler(async (req, res) => {
  try {
    const response = await userController.createUser(req.body);
    globalServices.successResponse(res, response);
  } catch (error) {
    globalServices.addStatusCodeWithError(error, res);
  }
});

export const loginUser = asyncHandler(async (req, res) => {
  try {
    const response = await userController.loginUser(req.body);
    globalServices.successResponse(res, response);
  } catch (error) {
    globalServices.addStatusCodeWithError(error, res);
  }
});

export const updateUserProfile = asyncHandler(async (req, res) => {
  try {
    const response = await userController.updateProfile(req.user._id, req.body);
    globalServices.successResponse(res, response);
  } catch (error) {
    globalServices.addStatusCodeWithError(error, res);
  }
});

export const testUser = asyncHandler(async (req, res) => {
  try {
    console.log("User");
    console.log(req.user);
    const response = await userController.followUser(
      req.user._id,
      req.body.userId
    );
    globalServices.successResponse(res, response);
  } catch (error) {
    globalServices.addStatusCodeWithError(error, res);
  }
});

export const followUser = asyncHandler(async (req, res) => {
  try {
    const response = await userController.followUser(
      req.user._id,
      req.body.userId
    );
    globalServices.successResponse(res, response);
  } catch (error) {
    globalServices.addStatusCodeWithError(error, res);
  }
});

export const unfollowUser = asyncHandler(async (req, res) => {
  try {
    const response = await userController.unfollowUser(
      req.user._id,
      req.body.userId
    );
    globalServices.successResponse(res, response);
  } catch (error) {
    globalServices.addStatusCodeWithError(error, res);
  }
});

// Post

export const createPost = asyncHandler(async (req, res) => {
  try {
    req.body.filename = req.file.filename;
    // req.body.__dirname = __dirname;
    // console.log(__dirname);
    const response = await userController.createPost(req.user._id, req.body);
    globalServices.successResponse(res, response);
  } catch (error) {
    globalServices.addStatusCodeWithError(error, res);
  }
});

export const getAllPosts = asyncHandler(async (req, res) => {
  try {
    const response = await userController.getAllPosts(req.user._id);
    globalServices.successResponse(res, response);
  } catch (error) {
    globalServices.addStatusCodeWithError(error, res);
  }
});

export const getAllFollowersPosts = asyncHandler(async (req, res) => {
  try {
    const response = await userController.getAllFollowersPosts(req.user._id);
    globalServices.successResponse(res, response);
  } catch (error) {
    globalServices.addStatusCodeWithError(error, res);
  }
});

export const deletePost = asyncHandler(async (req, res) => {
  try {
    const response = await userController.deletePost(
      req.user._id,
      req.params.id
    );
    globalServices.successResponse(res, response);
  } catch (error) {
    globalServices.addStatusCodeWithError(error, res);
  }
});

export const likePost = asyncHandler(async (req, res) => {
  try {
    const response = await userController.likePost(req.user._id, req.params.id);
    globalServices.successResponse(res, response);
  } catch (error) {
    globalServices.addStatusCodeWithError(error, res);
  }
});

export const commentPost = asyncHandler(async (req, res) => {
  try {
    const response = await userController.deletePost(
      req.user._id,
      req.params.id,
      req.body.comment
    );
    globalServices.successResponse(res, response);
  } catch (error) {
    globalServices.addStatusCodeWithError(error, res);
  }
});
