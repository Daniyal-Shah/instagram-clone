import CommentModel from "./comment.model";

type PostModel = {
  _id: string;
  user: string;
  postImage: string;
  caption: string;
  comments: CommentModel[];
  likes: string[];
  createdAt: string;
  updatedAt: string;
};

export default PostModel;
