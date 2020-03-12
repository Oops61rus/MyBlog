const express = require('express');
const signUp = express.Router();
// здесь подключить файл для проверки токена checkToken.js и добавить его в коллбэк функции signUp
const controllerPages = require('../../controllers/pagesController');

signUp.get('/', controllerPages.urlPage('/public/signUp.html'));

module.exports = signUp;
