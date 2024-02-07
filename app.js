const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

// for serving static files
app.use("/static", express.static("static"));

// set the template engine as pug
app.set("view engine", "pug");

// set the view directory
app.set("views", path.join(__dirname, "views")); // views is the folder name

// ENDPOINTS

app.get("/", (req, res) => {
  res.render("index.pug");
  // res.send("Hello all you are on the home page!");
});

app.get("/home", (req, res) => {
  res.render("index.pug");
});

app.get("/about", (req, res) => {
  res.render("about.pug");
  // res.status(200).send("you are on the post post post about page!");
});

app.get("/contact", (req, res) => {
  res.render("contact.pug");
});

app.get("/services", (req, res) => {
  res.render("services.pug");
});

app.get("/classInfo", (req, res) => {
  res.render("classInfo.pug");
});

app.use(express.urlencoded());

// post request post post
app.post("/contact", (req, res) => {
  console.log(req.body);
  res.render("contact.pug");
});

// START THE SERVER
app.listen(port, () => {
  console.log(`your server is working on port ${port}`);
});
