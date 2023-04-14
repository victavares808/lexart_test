import { Router } from 'express';
import { makeGetProductsOnBuscapeController } from '../factories/getProductsOnBuscape';
import { adaptRoute } from '../adapters/ExpressAdapter';

const buscapeProductsRouter = Router();
const controller = makeGetProductsOnBuscapeController();

buscapeProductsRouter.get('/products/buscape/:category', adaptRoute(controller));

export { buscapeProductsRouter };
