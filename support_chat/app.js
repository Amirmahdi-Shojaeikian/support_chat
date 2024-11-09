const express = require("express");
const path = require("path");
const userRouter = require("./routes/user.routes");
const sopportRouter = require("./routes/support.routes");

const app = express();

//* BodyParser
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.json({ limit: "50mb" }));

//* CORS Policy


//* Static Folder
app.use(express.static(path.join(__dirname, "public")));

//* Routes
app.use("/v1/auth", userRouter);
app.use("/v1/auth", sopportRouter);

//* 404 Error handler

module.exports = app;
