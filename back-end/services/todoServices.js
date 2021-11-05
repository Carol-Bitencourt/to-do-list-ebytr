const todoModels = require('../models/todoModels');
// const todoValidations = require('./validations/todoValidations');

const addTodo = async (description, dateCreated, taskStatus) => {
  const result = await todoModels.addTodo(description, dateCreated, taskStatus);
  return { status: 200, response: result };
};

module.exports = {
  addTodo,
};
