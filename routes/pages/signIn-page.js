const express = require("express");
const signIn = express.Router();
const controllerPages = require("../../controllers/pagesController");

signIn.get("/", controllerPages.urlPage("/public/sign-in.html"));

module.exports = signIn;
