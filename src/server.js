import express from "express";
import dotenv from "dotenv";
import session from "express-session";
import cors from "cors";
import db from "./config/Database.js";
import UserRouter from "./routes/UserRouter.js";
import ProductRouter from "./routes/ProductRouter.js";

dotenv.config();

const app = express();

// (async () => {
//   await db.sync();
// })();

app.use(
  session({
    secret: process.env.SECRET_SESSION,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: "auto" },
  })
);
app.use(
  cors({
    credentials: true,
    origin: "http://localhost:5173",
  })
);
app.use(express.json());

app.use(UserRouter);
app.use(ProductRouter);

app.listen(process.env.PORT, () => {
  console.log("listening on port " + process.env.PORT);
});
