const express = require('express');
const Router = express.Router();
const { createUsers, getUsers, getUser, deleteUser, updateUser } = require('../CONTROLLER/user');

Router.post('/createUsers', createUsers);
Router.get('/getUsers', getUsers);
Router.get('/getUser/:id', getUser);
Router.patch('/getUser/:id', updateUser);
Router.delete('/getUser/:id', deleteUser);

module.exports = Router;  
