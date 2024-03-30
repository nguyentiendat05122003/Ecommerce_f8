import { StatusCodes } from "http-status-codes";
import { screenSizeService } from "~/services/screenSizeService";
import AppResponse from "~/utils/AppResponse";


const createScreenSize = async (req, res, next) => {
    return new AppResponse({
        message: "create ScreenSize of product success",
        statusCode: StatusCodes.OK,
        metadata: await screenSizeService.createScreenSize(req),
    }).send(res);
}

const getScreenSize = async (req, res, next) => {
    return new AppResponse({
        message: "get info ScreenSize of product success",
        statusCode: StatusCodes.OK,
        metadata: await screenSizeService.getScreenSize(req),
    }).send(res);
}

const getAllScreenSizes = async (req, res, next) => {
    return new AppResponse({
        message: "get info list ScreenSize of product success",
        statusCode: StatusCodes.OK,
        metadata: await screenSizeService.getAllScreenSize(req),
    }).send(res);
}

const updateScreenSize = async (req, res, next) => {
    return new AppResponse({
        message: "update info ScreenSize of product success",
        statusCode: StatusCodes.OK,
        metadata: await screenSizeService.updateScreenSize(req),
    }).send(res);
}

const deleteScreenSize = async (req, res, next) => {
    return new AppResponse({
        message: "delete ScreenSize of product success",
        statusCode: StatusCodes.OK,
        metadata: await screenSizeService.deleteOneScreenSize(req),
    }).send(res);
}

export const screenSizeController = { getScreenSize, getAllScreenSizes, updateScreenSize, deleteScreenSize, createScreenSize }