const connection = require('./connection');

const addTodo = async (description, dateCreated, taskStatus) => {
  const db = await connection();
  const result = await db.collection('to-do-collection')
    .insertOne({ task: { description, dateCreated, taskStatus } });
  return result;
  /** Source: https://www.w3schools.com/nodejs/nodejs_mongodb_insert.asp */
};

module.exports = {
  addTodo,
};
