require('dotenv').config()
const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: CLOUDINARY_NAME,
    api_key: CLOUDINARY_APIKEY,
    api_secret: CLOUDINARY_APISECRET
});

module.exports = cloudinary;
