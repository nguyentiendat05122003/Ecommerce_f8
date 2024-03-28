import { StatusCodes } from "http-status-codes";
import { typeService } from "~/services/typeService";
import AppResponse from "~/utils/AppResponse";


const createTypeProduct = async (req, res, next) => {
    return new AppResponse({
        message: "create type of product success",
        statusCode: StatusCodes.OK,
        metadata: await typeService.createTypeProduct(req),
    }).send(res);
}

const getTypeProduct = async (req, res, next) => {
    return new AppResponse({
        message: "get info type of product success",
        statusCode: StatusCodes.OK,
        metadata: await typeService.getTypeProduct(req),
    }).send(res);
}

const getAllTypeProducts = async (req, res, next) => {
    return new AppResponse({
        message: "get info list type of product success",
        statusCode: StatusCodes.OK,
        metadata: await typeService.getAllTypeProduct(req),
    }).send(res);
}

const updateTypeProduct = async (req, res, next) => {
    return new AppResponse({
        message: "update info type of product success",
        statusCode: StatusCodes.OK,
        metadata: await typeService.updateTypeProduct(req),
    }).send(res);
}

const deleteTypeProduct = async (req, res, next) => {
    return new AppResponse({
        message: "delete type of product success",
        statusCode: StatusCodes.OK,
        metadata: await typeService.deleteOneTypeProduct(req),
    }).send(res);
}

export const typeProductController = { getTypeProduct, getAllTypeProducts, updateTypeProduct, deleteTypeProduct, createTypeProduct }