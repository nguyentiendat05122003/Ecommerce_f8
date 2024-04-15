import Provider from "~/models/provider.model";
import { factory } from "./handlerFactory";

const getProvider = factory.getOne(Provider);
const createProvider = factory.createOne(Provider);
const getAllProvider = factory.getAll(Provider);
const updateProvider = factory.updateOne(Provider);
const deleteOneProvider = factory.deleteOne(Provider);

export const providerService = {
  getProvider,
  getAllProvider,
  updateProvider,
  deleteOneProvider,
  createProvider,
};
