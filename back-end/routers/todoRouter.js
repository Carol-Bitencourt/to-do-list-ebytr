const express = require('express');
const rescue = require('express-rescue');

const todoController = require('../controllers/todoControllers');

const todoRouter = express.Router();

todoRouter.post('/', rescue(todoController.addtodo));

module.exports = todoRouter;
