const express = require('express');
const Router = express.Router();
const { createUsers , getUsers } = require('../CONTROLLER/user');

Router.post('/createUsers', createUsers);
Router.get('/getUsers', getUsers);

module.exports = Router;