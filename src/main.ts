import express from 'express';
import { logRoutes } from './log-routes';
import logger from './logger/pino.logger';
import { userTask } from './modules/task';
import { userRouter } from './modules/user';

const server = express();

const port = 2000;
server.use(express.json());

server.use('/user', userRouter);
server.use('/task', userTask);

logRoutes(server);

server.listen(port, () => {
  logger.info(`Server is started on port ${port}...`);
});
