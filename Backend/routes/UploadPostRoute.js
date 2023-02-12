const express = require('express')
const router = express.Router()
const multer = require('multer')
const fs = require('fs')
const path = './uploads/'
// const uuidv4 = require('uuid/v4')

const { UploadPostController } = require('../controllers/PostUploadController')
const { DisplayAllPost } = require('../controllers/PostUploadController')
const UploadPost = require('../models/Upload-Post')

// path.join(__dirname, '../uploads/')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads/')
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname.toLowerCase().split(' ').join('-'))
        // cb(null, 'background-img.png')
    }
})

// console.log(storage.getFilename());


var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
        }
    }
});

router.post('/UploadPost', upload.single('Post'), (req, res, next) => {
    // console.log(req.file);
    let uploadPost = new UploadPost({
        Name: req.body.Name,
        Profile: req.body.Profile,
        Post: {
            data: fs.readFileSync('./uploads/' + req.file.filename),
            contentType: 'image/png'
        },
        Caption: req.body.Caption,
        Likes: req.body.Likes,
        Comment: req.body.Comment,
        Share: req.body.Share
    })

    uploadPost.save().then(() => res.json({ message: "Post Uploaded" })).catch((err) => { console.log('err'), res.status(400).json({ message: err }) })

}
)
router.get('/displayAllPost', DisplayAllPost)

module.exports = router