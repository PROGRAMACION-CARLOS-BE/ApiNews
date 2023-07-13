const express = require('express');

const { get, getById, create, update, destroy } = require('../controllers/NewController');
const { validatorNewCreate, validatorNewUpdate } = require('../Validators/NewValidator');
const { authenticateAdmin, authenticateAny } = require('../Middlewares/jwt')



const api = express.Router();

api.get('/noticias', get);
api.get('/noticias/:id', getById)
api.post('/noticias', authenticateAny, validatorNewCreate, create)
api.put('/noticias/:id', authenticateAny, validatorNewUpdate, update)
api.delete('/noticias/:id', authenticateAny,  destroy)

module.exports = api;