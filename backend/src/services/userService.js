import User from "~/models/user.model";
import { factory } from "./handlerFactory";
import AppError from "~/utils/AppError";
import { filterObj } from "~/helpers/filterObj";
import { uploadImageUser } from "~/utils/Upload";

const getUser = factory.getOne(User);
const updateUser = factory.updateOne(User);
const getAllUsers = factory.getAll(User);
const deleteUser = factory.deleteOne(User);
const updateMe = async (req) => {
  if (req.body.password || req.body.passwordConfirm) {
    throw new AppError(
      "This route is not for password updates. Please use /updateMyPassword.",
      400
    );
  }
  const filteredBody = filterObj(req.body, "photo", "email");

  if (req.file) {
    const path = await uploadImageUser({ path: req.file.path });
    filteredBody.photo = path;
  }
  const updatedUser = await User.findByIdAndUpdate(req.user._id, filteredBody, {
    new: true,
    runValidators: true,
  });
  return { user: updatedUser };
};

export const userService = {
  getUser,
  updateUser,
  getAllUsers,
  deleteUser,
  updateMe,
};
