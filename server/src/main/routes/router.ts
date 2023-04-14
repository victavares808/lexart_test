import { type Application } from 'express';
import { buscapeProductsRouter } from './buscape.routes';
import { mercadoLivreProductsRouter } from './mercadoLivre.routes';
import { getAllProductsRouter } from './all.routes';

export default (app: Application): void => {
  app.use('/api', buscapeProductsRouter);
  app.use('/api', mercadoLivreProductsRouter);
  app.use('/api', getAllProductsRouter);
};
