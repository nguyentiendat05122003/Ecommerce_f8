import { StatusCodes } from "http-status-codes";
import { diskService } from "~/services/diskService";
import AppResponse from "~/utils/AppResponse";


const createDisk = async (req, res, next) => {
    return new AppResponse({
        message: "create Disk of product success",
        statusCode: StatusCodes.OK,
        metadata: await diskService.createDisk(req),
    }).send(res);
}

const getDisk = async (req, res, next) => {
    return new AppResponse({
        message: "get info Disk of product success",
        statusCode: StatusCodes.OK,
        metadata: await diskService.getDisk(req),
    }).send(res);
}

const getAllDisks = async (req, res, next) => {
    return new AppResponse({
        message: "get info list Disk of product success",
        statusCode: StatusCodes.OK,
        metadata: await diskService.getAllDisk(req),
    }).send(res);
}

const updateDisk = async (req, res, next) => {
    return new AppResponse({
        message: "update info Disk of product success",
        statusCode: StatusCodes.OK,
        metadata: await diskService.updateDisk(req),
    }).send(res);
}

const deleteDisk = async (req, res, next) => {
    return new AppResponse({
        message: "delete Disk of product success",
        statusCode: StatusCodes.OK,
        metadata: await diskService.deleteOneDisk(req),
    }).send(res);
}

export const diskController = { getDisk, getAllDisks, updateDisk, deleteDisk, createDisk }