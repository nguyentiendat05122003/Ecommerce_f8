import Screen from "~/models/screen.model";
import { factory } from "./handlerFactory";

const getScreen = factory.getOne(Screen);
const createScreen = factory.createOne(Screen);
const getAllScreen = factory.getAll(Screen);
const updateScreen = factory.updateOne(Screen);
const deleteOneScreen = factory.deleteOne(Screen);

export const screenService = {
  getScreen,
  getAllScreen,
  updateScreen,
  deleteOneScreen,
  createScreen,
};
