type UserModel = {
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

export default UserModel;
