const express = require("express");
const signUp = express.Router();
const controllerPages = require("../../controllers/pagesController");

signUp.get("/", controllerPages.urlPage("/public/sign-up.html"));

module.exports = signUp;
