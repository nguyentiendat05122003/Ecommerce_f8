import { StatusCodes } from "http-status-codes";
import { authService } from "~/services/authService";
import AppResponse from "~/utils/AppResponse";

const signUp = async (req, res, next) => {
    return new AppResponse({
        message: "Register success",
        statusCode: StatusCodes.OK,
        metadata: await authService.signUp(req.body),
    }).send(res);
};

export const authController = { signUp };
