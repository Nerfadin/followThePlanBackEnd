const UserController = require('../controllers/UserController');
const { response } = require('express');
const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({hello: "Hello World"})
})
routes.post('/users',UserController.store);


module.exports = routes;