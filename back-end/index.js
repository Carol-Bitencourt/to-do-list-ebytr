const express = require('express');

const app = express();
const todoRouter = require('./routers/todoRouter');

app.use(express.json());
app.use('/todo', todoRouter);

app.use((err, _req, res, _next) => {
  console.log('ERRRÃO', err);
  return res.status(err.status).json(err.error);
});

app.get('/', (_req, res) => {
  res.send();
});

app.listen(3001, () => console.log('ouvindo porta 3001!'));
