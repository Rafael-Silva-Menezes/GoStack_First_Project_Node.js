import { Router } from 'express';
import queryRouter from './medicalQuery.routes';

const routes = Router();

routes.use('/querys', queryRouter);

export default routes;
