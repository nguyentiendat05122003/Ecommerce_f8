import { StatusCodes } from "http-status-codes";
import { otherInfoService } from "~/services/otherInfoService";
import AppResponse from "~/utils/AppResponse";


const createOtherInfo = async (req, res, next) => {
    return new AppResponse({
        message: "create OtherInfo of product success",
        statusCode: StatusCodes.OK,
        metadata: await otherInfoService.createOtherInfo(req),
    }).send(res);
}

const getOtherInfo = async (req, res, next) => {
    return new AppResponse({
        message: "get info OtherInfo of product success",
        statusCode: StatusCodes.OK,
        metadata: await otherInfoService.getOtherInfo(req),
    }).send(res);
}

const getAllOtherInfos = async (req, res, next) => {
    return new AppResponse({
        message: "get info list OtherInfo of product success",
        statusCode: StatusCodes.OK,
        metadata: await otherInfoService.getAllOtherInfo(req),
    }).send(res);
}

const updateOtherInfo = async (req, res, next) => {
    return new AppResponse({
        message: "update info OtherInfo of product success",
        statusCode: StatusCodes.OK,
        metadata: await otherInfoService.updateOtherInfo(req),
    }).send(res);
}

const deleteOtherInfo = async (req, res, next) => {
    return new AppResponse({
        message: "delete OtherInfo of product success",
        statusCode: StatusCodes.OK,
        metadata: await otherInfoService.deleteOneOtherInfo(req),
    }).send(res);
}

export const otherInfoController = { getOtherInfo, getAllOtherInfos, updateOtherInfo, deleteOtherInfo, createOtherInfo }