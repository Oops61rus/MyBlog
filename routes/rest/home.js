const express = require("express");
const home = express.Router();
const checkToken = require("../../services/tokenChecker");
const searchController = require("../../controllers/search-users-controller");

home.post("/", checkToken, searchController.searchUsers);

module.exports = home;
