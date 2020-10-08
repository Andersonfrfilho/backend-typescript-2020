import 'reflect-metadata';
import express, { Response, Request, NextFunction, response } from 'express';
import 'express-async-errors';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';
import './database';
import swaggerDocument from '../swagger2.json';
import uploadConfig from './config/upload';
import AppError from './errors/AppError';

const app = express();

app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);
app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }
  console.log(err);
  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});
app.listen(3333, () => {
  console.log('🛰 Server started on port 3333');
});
