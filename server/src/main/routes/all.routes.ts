import { Router } from 'express';
import { adaptRoute } from '../adapters/ExpressAdapter';
import { makeGetAllProductsController } from '../factories/getAllProducts';

const getAllProductsRouter = Router();
const controller = makeGetAllProductsController();

getAllProductsRouter.get('/products/all/:category', adaptRoute(controller));

export { getAllProductsRouter };
