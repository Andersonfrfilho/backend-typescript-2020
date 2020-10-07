import 'reflect-metadata';
import express from 'express';
import swaggerUi from 'swagger-ui-express';
import routes from './routes';
import './database';
import swaggerDocument from '../swagger2.json';

const app = express();

app.use(express.json());
app.use(routes);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(3333, () => {
  console.log('🛰 Server started on port 3333');
});
