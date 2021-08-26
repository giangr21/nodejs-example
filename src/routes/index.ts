import { Router } from 'express';
import examplesRouter from './example.routes';

const routes = Router();

routes.use('/example', examplesRouter);

export default routes;
