
import cloudinary from "cloudinary"
import dotenv from 'dotenv';
dotenv.config();

 async function uploadImageToCloudinary  (file, folder, height, quality){
  const options = { folder }
  if (height) {
    options.height = height
  }
  if (quality) {
    options.quality = quality
  }
  options.resource_type = "auto"
  console.log("OPTIONS", options)
  return await cloudinary.uploader.upload(file.path, options)
}

export {uploadImageToCloudinary};