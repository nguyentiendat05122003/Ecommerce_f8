import { StatusCodes } from "http-status-codes"
import { ReasonStatusCode } from "~/constants"


class AppResponse {
    constructor({ message, statusCode = StatusCodes.OK, reasonStatusCode = ReasonStatusCode.OK, metadata = {} }) {
        this.message = !message ? reasonStatusCode : message
        this.status = statusCode
        this.metadata = metadata
    }
    send(res, headers = {}) {
        return res.status(this.status).json(this)
    }
}

export default AppResponse