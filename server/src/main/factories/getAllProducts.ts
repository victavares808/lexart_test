import { GetProductsFromDB } from "../../data/useCases/getProducts/GetProducts";
import { PrismaProductsRepository } from "../../infra/database/repositories/PrismaProductsRepository";
import { GetAllProductsController } from "../../presentation/controllers/getAllProducts/GetAllProductsController";
import { Controller } from "../../presentation/protocols";

export const makeGetAllProductsController = (): Controller => {
  const buscapeRepository = new PrismaProductsRepository();
  const getProductsFromDB = new GetProductsFromDB(buscapeRepository);
  return new GetAllProductsController(getProductsFromDB);
};
