import { StatusCodes } from "http-status-codes"
import AppError from "./AppError"

export default function validationsObject(validationResult, next) {
    if (!validationResult.error) {
        next()
    }
    else {
        const message = validationResult.error.details[0].message
        next(new AppError(message, StatusCodes.UNPROCESSABLE_ENTITY))
    }
}