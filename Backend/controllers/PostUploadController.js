const UploadPost = require('../models/Upload-Post')
const fs = require('fs')
const path = 'uploads/'

// const UploadPostController = (req, res, next) => {
//     console.log(req.files);
//     let uploadPost = new UploadPost({
//         Name: req.body.Name,
//         Profile: req.body.Profile,
//         Post: {
//             data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
//             contentType: 'image/png'
//         },
//         Caption: req.body.Caption,
//         Likes: req.body.Likes,
//         Comment: req.body.Comment,
//         Share: req.body.Share
//     })

//     uploadPost.save().then(() => res.json({ message: "Post Uploaded" })).catch((err) => { console.log('err'), res.status(400).json({ message: err }) })

// }

let DisplayAllPost = (req, res, next) => {

    UploadPost.find().then((result) => res.json({ data: result })).catch((err) => res.status(400).json({ message: err }))
}

// module.exports = { UploadPostController, DisplayAllPost }
module.exports = { DisplayAllPost }