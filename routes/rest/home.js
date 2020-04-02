const express = require("express");
const users = express.Router();
const checkToken = require("../../services/tokenChecker");
const searchController = require("../../controllers/search-users-controller");
const myPostsController = require("../../controllers/my-post-controller");
const addPostController = require("../../controllers/add-post-controller");

users.get("/", checkToken, searchController.searchUsers);
users.get("/search", checkToken, searchController.searchUsers);
users.get("/id/posts", checkToken, myPostsController.getMyPosts);
users.post("/id/add-post", checkToken, addPostController.createPost);

module.exports = users;
