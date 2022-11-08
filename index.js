require('./DB');
require('./Schema/User')
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const mongoose = require('mongoose');
const User = mongoose.model('User');

const upload = require('./Middleware/multer');
const cloudinary = require('./Middleware/cloudinary');

let Port = 5000;
app.use(bodyParser.json());

app.post('/' ,upload, async (req,res) => {
    
    // const result = await cloudinary.uploader.upload(req.body.image);
    // console.log(req.body.image)
    // res.send(req.body.image)
    const user = new User ({
        // picture: result.secure_url,
        // image: result.secure_url
        image: req.body.image
    })
    user.save()
    .then( (data) => {
        console.log(data)
        res.send(data)
    })
    .catch( (err) => {
        console.log(err.message)
    })
    
    
    // if (req.file.mimetype == "video/mp4") {
    //     const result = await cloudinary.uploader.upload(req.file.path, {resource_type: "video"});
    //     // res.send(result)
    //     const user = new User ({
    //         video: result.secure_url
    //     })
    //     user.save()
    //     .then( (data) => {
    //         console.log(data)
    //         res.send(data)
    //     })
    //     .catch( (err) => {
    //         console.log(err.message)
    //     })
        
    // }else{
    //     const result = await cloudinary.uploader.upload(req.file.path );
    //     const user = new User ({
    //         picture: result.secure_url,
    //     })
    //     user.save()
    //     .then( (data) => {
    //         console.log(data)
    //         res.send(data)
    //     })
    //     .catch( (err) => {
    //         console.log(err.message)
    //     })
    // }
})

app.listen(Port , () => {
    console.log("Server is Connected Successfully")
})


