const sequelize = require('sequelize');
const dbConfig = require('../config/database.js');
const user = require('../models/Users');  
const connection = new sequelize(dbConfig);
User.init(connection);

module.exports = connection;