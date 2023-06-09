import { Router } from 'express';
import { makeGetProductsOnMercadoLivreController } from '../factories/getProductsOnMercadoLivre';
import { adaptRoute } from '../adapters/ExpressAdapter';

const mercadoLivreProductsRouter = Router();
const controller = makeGetProductsOnMercadoLivreController();

mercadoLivreProductsRouter.get('/products/mercado-livre/:category', adaptRoute(controller));

export { mercadoLivreProductsRouter };
