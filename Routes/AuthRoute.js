var express = require('express');

const { login, register, } = require('../Controllers/AuthController');
const { validatorLogin, validatorRegister } = require('../Validators/AuthValidator');
const api = express.Router();

api.post('/auth/login', validatorLogin, login);
api.post('/auth/registro/', validatorRegister, register)



module.exports = api;