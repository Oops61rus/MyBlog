const express = require("express");
const home = express.Router();
const checkToken = require("../../services/tokenChecker");
const controllerPages = require("../../controllers/pagesController");

home.get("/", checkToken, controllerPages.urlPage("/public/home.html"));

module.exports = home;
