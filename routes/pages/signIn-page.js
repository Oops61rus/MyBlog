const express = require('express');
const signIn = express.Router();
// здесь подключить файл для проверки токена checkToken.js и добавить его в коллбэк функции signUp
const controllerPages = require('../../controllers/pagesController');

signIn.get('/', controllerPages.urlPage('public/index.html'));

module.exports = signIn;
