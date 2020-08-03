if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  module.exports = {
   provider: "cloudinary",
   providerOptions: {
     cloud_name: process.env.CLOUDINARY_NAME,
     api_key: process.env.CLOUDINARY_KEY,
     api_secret: process.env.CLOUDINARY_SECRET
   }
 };
} else if (process.env.NODE_ENV === "production") {
 module.exports = {
   provider: "cloudinary",
   providerOptions: {
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
   }
 };
}