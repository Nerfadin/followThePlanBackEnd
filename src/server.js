const routes = require('./routes/routes.js');
const express = require('express');
app = express();
app.use (routes);
app.listen(8080);