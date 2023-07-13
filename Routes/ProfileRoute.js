var express = require('express');

const {get, getById, }  = require('../Controllers/ProfileController');



const api = express.Router();

api.get('/perfiles', get);
api.get('/perfiles/:id', getById)


module.exports = api;