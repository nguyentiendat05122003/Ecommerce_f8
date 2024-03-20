import User from "~/models/user.model";
import { factory } from "./handlerFactory";

const getUser = factory.getOne(User)
const updateUser = factory.updateOne(User)
const getAllUsers = factory.getAll(User)
const deleteUser = factory.deleteOne(User)

export const userService = { getUser, updateUser, getAllUsers, deleteUser }