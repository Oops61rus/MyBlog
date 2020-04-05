const express = require("express");
const myPosts = express.Router();
const checkToken = require("../../services/tokenChecker");
const controllerPages = require("../../controllers/pagesController");

myPosts.get(
  "/",
  checkToken,
  controllerPages.urlPage("/authPages/my-posts.html")
);

module.exports = myPosts;
