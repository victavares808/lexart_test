import { type Application } from 'express';
import { buscapeProductsRouter } from './buscape.routes';
import { mercadoLivreProductsRouter } from './mercadoLivre.route';

export default (app: Application): void => {
  app.use('/api', buscapeProductsRouter);
  app.use('/api', mercadoLivreProductsRouter);
};
