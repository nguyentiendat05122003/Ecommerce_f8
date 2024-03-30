import { StatusCodes } from "http-status-codes";
import { screenResolutionService } from "~/services/screenResolutionService";
import AppResponse from "~/utils/AppResponse";


const createScreenResolution = async (req, res, next) => {
    return new AppResponse({
        message: "create ScreenResolution of product success",
        statusCode: StatusCodes.OK,
        metadata: await screenResolutionService.createScreenResolution(req),
    }).send(res);
}

const getScreenResolution = async (req, res, next) => {
    return new AppResponse({
        message: "get info ScreenResolution of product success",
        statusCode: StatusCodes.OK,
        metadata: await screenResolutionService.getScreenResolution(req),
    }).send(res);
}

const getAllScreenResolutions = async (req, res, next) => {
    return new AppResponse({
        message: "get info list ScreenResolution of product success",
        statusCode: StatusCodes.OK,
        metadata: await screenResolutionService.getAllScreenResolution(req),
    }).send(res);
}

const updateScreenResolution = async (req, res, next) => {
    return new AppResponse({
        message: "update info ScreenResolution of product success",
        statusCode: StatusCodes.OK,
        metadata: await screenResolutionService.updateScreenResolution(req),
    }).send(res);
}

const deleteScreenResolution = async (req, res, next) => {
    return new AppResponse({
        message: "delete ScreenResolution of product success",
        statusCode: StatusCodes.OK,
        metadata: await screenResolutionService.deleteOneScreenResolution(req),
    }).send(res);
}

export const screenResolutionController = { getScreenResolution, getAllScreenResolutions, updateScreenResolution, deleteScreenResolution, createScreenResolution }