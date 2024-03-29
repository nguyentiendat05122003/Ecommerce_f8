import CPU from "~/models/cpu.model";
import { factory } from "./handlerFactory";

const getCPU = factory.getOne(CPU)
const createCPU = factory.createOne(CPU)
const getAllCPU = factory.getAll(CPU)
const updateCPU = factory.updateOne(CPU)
const deleteOneCPU = factory.deleteOne(CPU)

export const cpuService = { getCPU, getAllCPU, updateCPU, deleteOneCPU, createCPU }