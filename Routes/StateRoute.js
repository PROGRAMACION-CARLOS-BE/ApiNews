var express = require('express');


const {get, getById, create, update, destroy}  = require('../Controllers/StateController');
const {validatorStateRequire, validatorStateOptional} = require('../Validators/StateValidator')
const { authenticateAdmin } = require('../Middlewares/jwt')

const api = express.Router();

api.get('/estados', get);
api.get('/estados/:id', getById)
api.post('/estados', authenticateAdmin, validatorStateRequire, create)
api.put('/estados/:id', authenticateAdmin, validatorStateOptional, update)
api.delete('/estados/:id', authenticateAdmin, destroy)


module.exports = api;