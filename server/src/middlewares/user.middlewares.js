import { Strategy } from "passport-jwt";
import { ExtractJwt } from "passport-jwt";
import passport from "passport";
import { UsersModel } from "../models/users/user.model.js";
import dotenv from "dotenv";
dotenv.config();

function userAuth() {
  var opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  opts.secretOrKey = "JWT";

  passport.use(
    "user.auth",
    new Strategy(opts, function (jwt_payload, done) {
      UsersModel.findById(jwt_payload.id, function (err, user) {
        if (user) {
          return done(null, user);
        } else {
          return done(err, false);
        }
      });
    })
  );
}

export default userAuth;
