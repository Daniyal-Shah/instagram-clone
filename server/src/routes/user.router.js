import express from "express";
import * as userServices from "./user.services.js";
import userAuth from "../middlewares/user.middlewares.js";
import passport from "passport";
import { upload } from "../middlewares/fileUpload.js";

export const userRouter = express.Router();

// Middlewares
userAuth();

//Routes
userRouter
  // Login Routes
  .post("/signup", userServices.createUser)
  .post("/login", userServices.loginUser)

  .use(passport.authenticate("user.auth", { session: false }))
  .get("/test", userServices.testUser)
  .patch("/profile", userServices.updateUserProfile)
  .post("/follow", userServices.followUser)
  .post("/unfollow", userServices.unfollowUser)

  // Posts
  .get("/post", userServices.getAllPosts)
  .get("/post/following", userServices.getAllFollowersPosts)
  .post("/post", upload.single("image"), userServices.createPost)
  .post("/post/like/:id", userServices.likePost)
  .post("/post/comment/:id", userServices.commentPost)
  .delete("/post/:id", userServices.deletePost);
