import express from 'express';
import logger from '../logger/pino.logger';
import { taskMock } from '../mocks/task.mocks';

export const taskRouter = express.Router();

taskRouter.post('/', (req, res) => {
  logger.info('Успешно сгенерирована задача пользователя');
  res.json(taskMock());
});

taskRouter.get('/:id', (req, res) => {
  logger.info('Достали задачу по id');
  res.json(taskMock());
});

taskRouter.get('/', (req, res) => {
  logger.info('Сгенерировали 10 задач');
  res.json(taskMock(10));
});
