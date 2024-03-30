import { StatusCodes } from "http-status-codes";
import { screenRefreshRateService } from "~/services/screenRefreshRateService";
import AppResponse from "~/utils/AppResponse";


const createScreenRefreshRate = async (req, res, next) => {
    return new AppResponse({
        message: "create ScreenRefreshRate of product success",
        statusCode: StatusCodes.OK,
        metadata: await screenRefreshRateService.createScreenRefreshRate(req),
    }).send(res);
}

const getScreenRefreshRate = async (req, res, next) => {
    return new AppResponse({
        message: "get info ScreenRefreshRate of product success",
        statusCode: StatusCodes.OK,
        metadata: await screenRefreshRateService.getScreenRefreshRate(req),
    }).send(res);
}

const getAllScreenRefreshRates = async (req, res, next) => {
    return new AppResponse({
        message: "get info list ScreenRefreshRate of product success",
        statusCode: StatusCodes.OK,
        metadata: await screenRefreshRateService.getAllScreenRefreshRate(req),
    }).send(res);
}

const updateScreenRefreshRate = async (req, res, next) => {
    return new AppResponse({
        message: "update info ScreenRefreshRate of product success",
        statusCode: StatusCodes.OK,
        metadata: await screenRefreshRateService.updateScreenRefreshRate(req),
    }).send(res);
}

const deleteScreenRefreshRate = async (req, res, next) => {
    return new AppResponse({
        message: "delete ScreenRefreshRate of product success",
        statusCode: StatusCodes.OK,
        metadata: await screenRefreshRateService.deleteOneScreenRefreshRate(req),
    }).send(res);
}

export const screenRefreshRateController = { getScreenRefreshRate, getAllScreenRefreshRates, updateScreenRefreshRate, deleteScreenRefreshRate, createScreenRefreshRate }