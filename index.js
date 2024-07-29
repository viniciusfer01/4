const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const path = require("path");

const users = [];

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded());

app.get("/", (req, res) => {
  res.render("userList", { title: "User List", users: users });
});

app.get("/userForm", (req, res) => {
  res.render("userForm", { title: "Create User" });
});

app.post("/userForm", (req, res) => {
  users.push({ email: req.body.userEmail });
  res.redirect("/");
});

app.listen(8080, () => {
  console.log("listening on port 8080...");
});
