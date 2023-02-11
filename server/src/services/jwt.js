import jwt from "jsonwebtoken";

export function getJwtToken(id, expiresIn) {
  return jwt.sign(
    { id },
    "JWT",
    expiresIn && {
      expiresIn: expiresIn,
    }
  );
}
