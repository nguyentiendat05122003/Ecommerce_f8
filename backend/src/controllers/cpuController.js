import { StatusCodes } from "http-status-codes";
import { cpuService } from "~/services/cpuService";
import AppResponse from "~/utils/AppResponse";


const createCPU = async (req, res, next) => {
    return new AppResponse({
        message: "create cpu of product success",
        statusCode: StatusCodes.OK,
        metadata: await cpuService.createCPU(req),
    }).send(res);
}

const getCPU = async (req, res, next) => {
    return new AppResponse({
        message: "get info cpu of product success",
        statusCode: StatusCodes.OK,
        metadata: await cpuService.getCPU(req),
    }).send(res);
}

const getAllCPUs = async (req, res, next) => {
    return new AppResponse({
        message: "get info list cpu of product success",
        statusCode: StatusCodes.OK,
        metadata: await cpuService.getAllCPU(req),
    }).send(res);
}

const updateCPU = async (req, res, next) => {
    return new AppResponse({
        message: "update info cpu of product success",
        statusCode: StatusCodes.OK,
        metadata: await cpuService.updateCPU(req),
    }).send(res);
}

const deleteCPU = async (req, res, next) => {
    return new AppResponse({
        message: "delete cpu of product success",
        statusCode: StatusCodes.OK,
        metadata: await cpuService.deleteOneCPU(req),
    }).send(res);
}

export const cpuController = { getCPU, getAllCPUs, updateCPU, deleteCPU, createCPU }