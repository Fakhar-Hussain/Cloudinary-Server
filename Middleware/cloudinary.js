const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'fakhar20',
    api_key: '467527714364422',
    api_secret: 'QBiGp1aNa9YZIbGTmYuYqS0ZIT0',
})

module.exports = cloudinary;
