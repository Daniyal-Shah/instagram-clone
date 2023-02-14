import express from "express";
import dotenv from "dotenv";
import { mongoConnect } from "./services/mongo.js";
import { userRouter } from "./routes/user.router.js";
import { seeding } from "./seeders/seeding.js";
import cors from "cors";

dotenv.config();
mongoConnect();
// seeding();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded());
app.use(cors({}));

app.use("/api/user", userRouter);
app.use("/", (req, res) =>
  res.json(
    "Hello Fella! What are you doing here? There is nothing here, Please contact daniyal.shah@venturedive.com"
  )
);

app.listen(5000, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
