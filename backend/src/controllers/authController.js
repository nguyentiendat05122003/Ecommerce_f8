import { StatusCodes } from "http-status-codes";
import { SetCookieAndSetData } from "~/helpers/SetCookieAndSetData";
import { authService } from "~/services/authService";
import AppResponse from "~/utils/AppResponse";

const signUp = async (req, res, next) => {
    return new AppResponse({
        message: "Register success",
        statusCode: StatusCodes.CREATED,
        metadata: await authService.signUp(req.body),
    }).send(res);
};

const login = async (req, res, next) => {
    const data = await authService.login(req.body)
    const newData = SetCookieAndSetData(res, data)
    return new AppResponse({
        message: "login success",
        statusCode: StatusCodes.OK,
        metadata: newData,
    }).send(res);
};

const refreshToken = async (req, res, next) => {
    const data = await authService.refreshToken(req)
    const newData = SetCookieAndSetData(res, data)
    return new AppResponse({
        message: "refresh token success",
        statusCode: StatusCodes.OK,
        metadata: newData
    }).send(res)
}

export const authController = { signUp, login, refreshToken };
