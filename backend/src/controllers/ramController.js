import { StatusCodes } from "http-status-codes";
import { ramService } from "~/services/ramService";
import AppResponse from "~/utils/AppResponse";


const createRam = async (req, res, next) => {
    return new AppResponse({
        message: "create Ram of product success",
        statusCode: StatusCodes.OK,
        metadata: await ramService.createRam(req),
    }).send(res);
}

const getRam = async (req, res, next) => {
    return new AppResponse({
        message: "get info Ram of product success",
        statusCode: StatusCodes.OK,
        metadata: await ramService.getRam(req),
    }).send(res);
}

const getAllRams = async (req, res, next) => {
    return new AppResponse({
        message: "get info list Ram of product success",
        statusCode: StatusCodes.OK,
        metadata: await ramService.getAllRam(req),
    }).send(res);
}

const updateRam = async (req, res, next) => {
    return new AppResponse({
        message: "update info Ram of product success",
        statusCode: StatusCodes.OK,
        metadata: await ramService.updateRam(req),
    }).send(res);
}

const deleteRam = async (req, res, next) => {
    return new AppResponse({
        message: "delete Ram of product success",
        statusCode: StatusCodes.OK,
        metadata: await ramService.deleteOneRam(req),
    }).send(res);
}

export const ramController = { getRam, getAllRams, updateRam, deleteRam, createRam }