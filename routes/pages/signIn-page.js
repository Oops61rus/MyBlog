const express = require("express");
const signIn = express.Router();
const controllerPages = require("../../controllers/pagesController");
const checkToken = require("../../services/tokenChecker");

signIn.get("/", checkToken, (req, res) => res.redirect("/home"));
signIn.get("/signIn", controllerPages.urlPage("/public/sign-in.html"));

module.exports = signIn;
