import AppResponse from "~/utils/AppResponse";
import { StatusCodes } from "http-status-codes";

const signUp = (reqBody) => {
    return new AppResponse({
        message: "Register success",
        statusCode: StatusCodes.OK,
        metadata: reqBody,
    });
};

export const authService = {
    signUp,
};
