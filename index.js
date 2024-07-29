const express = require("express");
const app = express();
const path = require("path");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("userList.ejs", { title: "User List" });
});

app.get("/userForm", (req, res) => {
  res.render("userForm.ejs");
});

app.listen(8080, () => {
  console.log("listening on port 8080...");
});
