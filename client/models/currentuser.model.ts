import TokenModel from "./token.model";
import UserModel from "./user.model";

type CurrentUserModel = {
  token: TokenModel;
  user: UserModel;
};

export default CurrentUserModel;
