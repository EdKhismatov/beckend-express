import express from 'express';
import logger from '../logger/pino.logger';
import { taskMock } from '../mocks/taskMocks';

export const userTask = express.Router();

userTask.post('/', (req, res) => {
  logger.info('Успешно сгенерирована задача пользователя');
  res.send(taskMock());
});

userTask.get('/:id', (req, res) => {
  logger.info('Достали задачу по id');
  res.send(taskMock());
});

userTask.get('/', (req, res) => {
  logger.info('Сгенерировали 10 задач');
  res.send(taskMock(10));
});
