const express = require("express");
const friendsPosts = express.Router();
const checkToken = require("../../services/tokenChecker");
const controllerPages = require("../../controllers/pagesController");

friendsPosts.get("/", checkToken, controllerPages.urlPage("/public/friends-posts.html"));

module.exports = friendsPosts;
