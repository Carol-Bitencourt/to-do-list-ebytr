const todoServices = require('../services/todoServices');

const addTodo = async (req, res) => {
  const { description, dateCreated, taskStatus } = req.body;
  const { status, response } = await todoServices.addTodo(description, dateCreated, taskStatus);
  return res.status(status).json(response);
};

module.exports = {
  addTodo,
};
