import { StatusCodes } from "http-status-codes";
import { userService } from "~/services/userService";
import AppResponse from "~/utils/AppResponse";

const getUser = async (req, res, next) => {
    return new AppResponse({
        message: "get info user success",
        statusCode: StatusCodes.OK,
        metadata: await userService.getUser(req),
    }).send(res);
}

const updateUser = async (req, res, next) => {
    return new AppResponse({
        message: "update info user success",
        statusCode: StatusCodes.OK,
        metadata: await userService.updateUser(req),
    }).send(res);
}

const getAllUsers = async (req, res, next) => {
    return new AppResponse({
        message: "get info list user success",
        statusCode: StatusCodes.OK,
        metadata: await userService.getAllUsers(req),
    }).send(res);
}


export const userController = { getUser, updateUser, getAllUsers } 