import express from 'express';
import logger from './logger/pino.logger';
import { taskRouter } from './modules/task.module';
import { userRouter } from './modules/user.module';
import { logRoutes } from './utils/log-routes';

const server = express();

const port = 2000;
server.use(express.json());

server.use('/user', userRouter);
server.use('/task', taskRouter);

logRoutes(server);

server.listen(port, () => {
  logger.info(`Server is started on port ${port}...`);
});
