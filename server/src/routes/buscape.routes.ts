import { Router } from 'express';
import { makeGetProductsOnBuscapeController } from '../factories/getProductsOnBuscape';
import { adaptRoute } from '../adapters/ExpressAdapter';

const buscapeProductsRouter = Router();

const controller = makeGetProductsOnBuscapeController();

buscapeProductsRouter.get('/buscape', adaptRoute(controller));

export { buscapeProductsRouter };
