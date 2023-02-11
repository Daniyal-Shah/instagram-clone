import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.connection.once("open", () => {
  console.log("Mongoose connection ready");
});
mongoose.connection.on("error", (err) => {
  console.error(err);
});

export function mongoConnect() {
  console.log("Connecting Mongo Db...");

  mongoose.connect("mongodb://localhost:27017/instagram-clone", function (err) {
    if (err) {
      console.error(
        "Failed to connect to mongo on startup - retrying in 5 sec",
        err
      );

      setTimeout(mongoConnect, 5000);
    }
  });
}
export async function mongoDisconnect() {
  await mongoose.disconnect();
}
