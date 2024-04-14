import { StatusCodes } from "http-status-codes";
import { commentService } from "~/services/commentService";
import AppResponse from "~/utils/AppResponse";

const createComment = async (req, res, next) => {
  return new AppResponse({
    message: "create Comment of product success",
    statusCode: StatusCodes.OK,
    metadata: await commentService.createComment(req),
  }).send(res);
};

const getComment = async (req, res, next) => {
  return new AppResponse({
    message: "get info Comment of product success",
    statusCode: StatusCodes.OK,
    metadata: await commentService.getComment(req),
  }).send(res);
};

const getAllComments = async (req, res, next) => {
  return new AppResponse({
    message: "get info list Comment of product success",
    statusCode: StatusCodes.OK,
    metadata: await commentService.getAllComment(req),
  }).send(res);
};

const updateComment = async (req, res, next) => {
  return new AppResponse({
    message: "update info Comment of product success",
    statusCode: StatusCodes.OK,
    metadata: await commentService.updateComment(req),
  }).send(res);
};

const deleteComment = async (req, res, next) => {
  return new AppResponse({
    message: "delete Comment of product success",
    statusCode: StatusCodes.OK,
    metadata: await commentService.deleteOneComment(req),
  }).send(res);
};

export const commentController = {
  getComment,
  getAllComments,
  updateComment,
  deleteComment,
  createComment,
};
