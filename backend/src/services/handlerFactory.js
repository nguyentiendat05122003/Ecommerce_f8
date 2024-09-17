import AppError from "~/utils/AppError";
import APIFeatures, { applyFilterByObjectIds } from "~/utils/ApiFeature";
import { Types } from "mongoose";
const deleteOne = (Model) => async (req) => {
  const doc = await Model.findByIdAndDelete(req.params.id).lean();
  if (!doc) {
    throw new AppError("No document found with that ID", 404);
  }
  return {
    data: null,
  };
};

const updateOne = (Model) => async (req) => {
  const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  }).lean();
  if (!doc) {
    throw new AppError("No document found with that ID", 404);
  }
  return {
    data: doc,
  };
};

const createOne = (Model) => async (req) => {
  const doc = await Model.create(req.body);
  return {
    data: doc,
  };
};

const getOne = (Model, popOptions) => async (req) => {
  let query = Model.findById(req.params.id);
  if (popOptions) query = query.populate(popOptions);
  const doc = await query;
  if (!doc) {
    throw new AppError("No document found with that ID", 404);
  }
  return {
    data: doc,
  };
};

const getAll =
  (Model, filter = {}) =>
  async (req) => {
    let result;

    // Kiểm tra nếu name rỗng
    if (req.query.name && req.query.name.trim() !== "") {
      const features = new APIFeatures(
        Model.find(filter),
        req.query
      ).searchByName();
      const doc = await features.query.lean();
      result = doc.length;
      console.log(result);
    }

    let features = new APIFeatures(Model.find(filter), req.query)
      .filter()
      .sort()
      .limitFields()
      .paginate();

    if (Model.modelName === "Product") {
      features = applyFilterByObjectIds(features, req.query);
    }

    const doc = await features.query.lean();

    // Cập nhật result nếu name rỗng
    if (!req.query.name || req.query.name.trim() === "") {
      result = await Model.countDocuments();
    }

    return {
      data: doc,
      result: result,
    };
  };
export const factory = { deleteOne, updateOne, getAll, getOne, createOne };
