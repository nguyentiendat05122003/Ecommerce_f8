import cloudinary from "~/configs/cloudinary";
import { uploadDisk } from "~/configs/multer";

export const uploadImageUser = async ({ path, folderName = "users" }) => {
  try {
    const result = await cloudinary.uploader.upload(path, {
      public_id: "image" + Date.now(),
      folder: folderName,
    });
    return result.secure_url;
  } catch (error) {
    console.log("error image", error);
  }
};

export const uploadThumbProduct = async ({
  path,
  folderName = "thumbsProduct",
}) => {
  try {
    const result = cloudinary.uploader.upload(path, {
      public_id: "image" + Date.now(),
      folder: folderName,
    });
    console.log(await result.secure_url);
    return {
      thumb_url: (await result).secure_url,
    };
  } catch (error) {
    console.log("error image", error);
  }
};

export const uploadImageBrand = async ({ path, folderName = "Brands" }) => {
  try {
    const result = await cloudinary.uploader.upload(path, {
      public_id: "image" + Date.now(),
      folder: folderName,
    });
    return result.secure_url;
  } catch (error) {
    console.log("error image", error);
  }
};

export const uploadImageTypeProduct = async ({
  path,
  folderName = "TypeProduct",
}) => {
  try {
    const result = await cloudinary.uploader.upload(path, {
      public_id: "image" + Date.now(),
      folder: folderName,
    });
    console.log(result.secure_url);
    return result.secure_url;
  } catch (error) {
    console.log("error image", error);
  }
};

export const uploadUserPhoto = uploadDisk.single("photo");
export const uploadTypeProductThumb = uploadDisk.single("thumb");
export const uploadBrandThumb = uploadDisk.single("thumb");

export const uploadProductImages = uploadDisk.fields([
  { name: "thumbs", maxCount: 3 },
  { name: "detailImages", maxCount: 3 },
]);

export const uploadDetailImageProduct = async ({
  path,
  folderName = "detailImageProduct",
}) => {
  try {
    const result = cloudinary.uploader.upload(path, {
      public_id: "image" + Date.now(),
      folder: folderName,
    });
    return {
      detailImage_url: (await result).secure_url,
    };
  } catch (error) {
    console.log("error image", error);
  }
};
