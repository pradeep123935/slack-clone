import express from "express";
import { ENV } from "./config/env.js";

const app = express();

app.listen(ENV.PORT, () => {
  console.log(`server started on port : ${ENV.PORT}`);
});
