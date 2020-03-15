const express = require("express");
const signUp = express.Router();
// const checkToken = require('../../services/tokenChecker')
const controllerPages = require("../../controllers/pagesController");

signUp.get("/", controllerPages.urlPage("/public/signUp.html"));

module.exports = signUp;
