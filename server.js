import * as dotenv from "dotenv";
dotenv.config();
import express from "express";
import morgan from "morgan";
import mongoose from "mongoose";

const app = express();

import appRouter from './routes/appRoutes.js'

app.use(express.json());


app.use("/api/v1/app", appRouter)


app.get("/", (req, res) => {
  res.send("Hello World");
});

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev")); 
}

const port = process.env.PORT || 5100;
try {
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
}