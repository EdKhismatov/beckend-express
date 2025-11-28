import express from 'express';

const server = express();

const port = 2000;

server.get('/hello', (req, res) => {
  console.log('Использую метод DELETE');
  res.send('Привет');
});

server.listen(port, () => {
  console.log(`Server is started on port ${port}...`);
});
