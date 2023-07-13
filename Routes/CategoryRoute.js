var express = require('express');

const {get, getById, create, update, destroy}  = require('../controllers/CategoryController');
const { validatorCategoryCreate, validatorCategoryUpdate } = require('../Validators/CategoryValidator');
const { authenticateAdmin } = require('../Middlewares/jwt')


const api = express.Router();

api.get('/categorias', get);
api.get('/categorias/:id', getById)
api.post('/categorias', authenticateAdmin, validatorCategoryCreate, create)
api.put('/categorias/:id', authenticateAdmin, validatorCategoryUpdate, update)
api.delete('/categorias/:id', authenticateAdmin, destroy)


module.exports = api;