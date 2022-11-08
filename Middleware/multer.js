const multer = require('multer');

const upload = multer({
    storage: multer.diskStorage({
        destination: 'Uploads',
        filename: ( req , file , cb ) => {
            if ( file.mimetype == 'video/mp4' ) {
                cb(null , file.fieldname + '-' + Date.now() + '.mp4' )
            } 
            else if (file.mimetype == 'image/jpeg'){
                cb(null , file.fieldname + '-' + Date.now() + '.jpg' )
            }
            else if (file.mimetype == 'image/png'){
                cb(null , file.fieldname + '-' + Date.now() + '.png' )
            }
            else{
                console.log("Sorry Your File Type is not supported")
            }
        }
    })
}).single('DCIM')

module.exports = upload;