import multer from "multer";
import AppError from "~/utils/AppError";

const multerStorage = multer.diskStorage(
    {
        destination: function (req, file, cb) {
            cb(null, './src/uploads')
        },
        filename: function (req, file, cb) {
            cb(null, `${Date.now()}-${file.originalname}`)
        }
    }
);

const multerFilter = (req, file, cb) => {
    if (file.mimetype.startsWith('image')) {
        cb(null, true);
    } else {
        cb(new AppError('Not an image! Please upload only images.', 400), false);
    }
};

export const uploadDisk = multer({
    storage: multerStorage,
    fileFilter: multerFilter
});
