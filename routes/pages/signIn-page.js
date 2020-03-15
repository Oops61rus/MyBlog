const express = require("express");
const signIn = express.Router();
// const checkToken = require('../../services/tokenChecker')
const controllerPages = require("../../controllers/pagesController");

signIn.get("/", controllerPages.urlPage("/public/signIn.html"));

module.exports = signIn;
