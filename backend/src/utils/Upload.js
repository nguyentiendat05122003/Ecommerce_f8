import cloudinary from "~/configs/cloudinary";
import { uploadDisk } from "~/configs/multer";

export const uploadImageUser = async ({
    path,
    folderName = 'users'
}) => {
    try {
        const result = await cloudinary.uploader.upload(path, {
            public_id: 'image' + Date.now(),
            folder: folderName
        })
        return result.secure_url

    } catch (error) {
        console.log('error image', error);
    }
}

export const uploadImageProduct = async ({
    path,
    folderName = 'products'
}) => {
    try {
        const result = cloudinary.uploader.upload(path, {
            public_id: 'image' + Date.now(),
            folder: folderName
        })
        return {
            image_url: (await result).secure_url
        }
    } catch (error) {
        console.log('error image', error);
    }
}

export const uploadImageBrand = async ({
    path,
    folderName = 'Brands'
}) => {
    try {
        const result = await cloudinary.uploader.upload(path, {
            public_id: 'image' + Date.now(),
            folder: folderName
        })
        return result.secure_url

    } catch (error) {
        console.log('error image', error);
    }
}

export const uploadImageTypeProduct = async ({
    path,
    folderName = 'TypeProduct'
}) => {
    try {
        const result = await cloudinary.uploader.upload(path, {
            public_id: 'image' + Date.now(),
            folder: folderName
        })
        return result.secure_url

    } catch (error) {
        console.log('error image', error);
    }
}

export const uploadUserPhoto = uploadDisk.single('photo')
export const uploadTypeProductThumb = uploadDisk.single('thumb')
export const uploadBrandThumb = uploadDisk.single('thumb')


