import { type Application } from 'express';
import { buscapeProductsRouter } from './buscape.routes';

export default (app: Application): void => {
  app.use('/api', buscapeProductsRouter);
};
