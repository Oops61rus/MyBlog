const express = require("express");
const addPost = express.Router();
const checkToken = require("../../services/tokenChecker");
const controllerPages = require("../../controllers/pagesController");

addPost.get(
  "/",
  checkToken,
  controllerPages.urlPage("/authPages/add-post.html")
);

module.exports = addPost;
