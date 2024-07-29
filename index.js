const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("userList", { title: "User List", users: [] });
});

app.get("/userForm", (req, res) => {
  res.render("userForm", { title: "Create User" });
});

app.post("/userForm", (req, res) => {
  res.redirect("/");
});

app.listen(8080, () => {
  console.log("listening on port 8080...");
});
