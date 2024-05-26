import Card from "~/models/card.model";
import { factory } from "./handlerFactory";

const getCard = factory.getOne(Card);
const createCard = factory.createOne(Card);
const getAllCard = factory.getAll(Card);
const updateCard = factory.updateOne(Card);
const deleteOneCard = factory.deleteOne(Card);

export const cardService = {
  getCard,
  getAllCard,
  updateCard,
  deleteOneCard,
  createCard,
};
