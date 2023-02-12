const mongoose = require("mongoose")
const schema = mongoose.Schema

const UploadPhotoSchema = new schema({
    Name: {
        type: String,
        required: true
    },
    Profile: {
        type: String,
        required: true
    },
    Post: {
        data: Buffer,
        contentType: String
    },
    Caption: {
        type: String
    },
    Likes: {
        type: Number
    }
    ,
    Comment: [
        { type: String }, { type: String }, { type: String }
    ],
    Share: [{
        type: String
    }]
}, { timestamps: true })

const PostUpload = mongoose.model("UploadedPost", UploadPhotoSchema)
module.exports = PostUpload