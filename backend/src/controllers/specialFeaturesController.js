import { StatusCodes } from "http-status-codes";
import { specialFeaturesService } from "~/services/specialFeaturesService";
import AppResponse from "~/utils/AppResponse";


const createSpecialFeatures = async (req, res, next) => {
    return new AppResponse({
        message: "create SpecialFeatures of product success",
        statusCode: StatusCodes.OK,
        metadata: await specialFeaturesService.createSpecialFeatures(req),
    }).send(res);
}

const getSpecialFeatures = async (req, res, next) => {
    return new AppResponse({
        message: "get info SpecialFeatures of product success",
        statusCode: StatusCodes.OK,
        metadata: await specialFeaturesService.getSpecialFeatures(req),
    }).send(res);
}

const getAllSpecialFeatures = async (req, res, next) => {
    return new AppResponse({
        message: "get info list SpecialFeatures of product success",
        statusCode: StatusCodes.OK,
        metadata: await specialFeaturesService.getAllSpecialFeatures(req),
    }).send(res);
}

const updateSpecialFeatures = async (req, res, next) => {
    return new AppResponse({
        message: "update info SpecialFeatures of product success",
        statusCode: StatusCodes.OK,
        metadata: await specialFeaturesService.updateSpecialFeatures(req),
    }).send(res);
}

const deleteSpecialFeatures = async (req, res, next) => {
    return new AppResponse({
        message: "delete SpecialFeatures of product success",
        statusCode: StatusCodes.OK,
        metadata: await specialFeaturesService.deleteOneSpecialFeatures(req),
    }).send(res);
}

export const specialFeaturesController = { getSpecialFeatures, getAllSpecialFeatures, updateSpecialFeatures, deleteSpecialFeatures, createSpecialFeatures }