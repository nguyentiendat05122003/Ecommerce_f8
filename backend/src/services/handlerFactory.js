import AppError from '~/utils/AppError'
import APIFeatures from '~/utils/ApiFeature';
const deleteOne = Model =>
    async (req) => {
        const doc = await Model.findByIdAndDelete(req.params.id).lean();
        if (!doc) {
            throw new AppError('No document found with that ID', 404);
        }
        return {
            data: null
        }
    };

const updateOne = Model =>
    async (req) => {
        const doc = await Model.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        }).lean();
        if (!doc) {
            throw new AppError('No document found with that ID', 404);
        }
        return {
            data: doc
        }
    };

const createOne = Model =>
    async (req) => {
        const doc = await Model.create(req.body);
        return {
            data: doc
        }
    };

const getOne = (Model, popOptions) =>
    async (req) => {
        let query = Model.findById(req.params.id);
        if (popOptions) query = query.populate(popOptions);
        const doc = await query.lean();

        if (!doc) {
            return next(new AppError('No document found with that ID', 404));
        }
        return {
            data: doc
        }
    };

const getAll = Model =>
    async (req) => {
        let filter = {};
        if (req.params.tourId) filter = { tour: req.params.tourId };

        const features = new APIFeatures(Model.find(filter), req.query)
            .filter()
            .sort()
            .limitFields()
            .paginate();
        const doc = await features.query;
        return {
            data: doc
        }
    };
export const factory = { deleteOne, updateOne, getAll, getOne, createOne } 