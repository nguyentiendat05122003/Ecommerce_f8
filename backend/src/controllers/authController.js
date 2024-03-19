import { StatusCodes } from "http-status-codes";
import { authService } from "~/services/authService";

const signUp = async (req, res, next) => {
    const newUser = await authService.signUp(req.body);
    res.status(StatusCodes.OK).json(newUser);
};

export const authController = { signUp };
