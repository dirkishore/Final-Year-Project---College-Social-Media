const express = require("express")
const cors = require('cors')
const mongoose = require('mongoose')
const multer = require('multer')


const url = "mongodb+srv://kishore:smkishore@cluster0.d76q4bi.mongodb.net/College_Social_Network?retryWrites=true&w=majority&ssl=true"

mongoose.set('strictQuery', true);
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', (err) => {
    console.log(err);
})

db.once("open", () => {
    console.log("Connected to Database");
})

const AuthRouter = require('./routes/StudentAuth')
const AdminAuthRouter = require('./routes/AdminAuth')
const StudentDetails = require('./routes/StudentDetails')
const getStudentDetails = require('./routes/StudentDetails')
const uploadPost = require('./routes/UploadPostRoute')

const app = express()
app.use(cors())
app.use(express.json())


app.use('/student', AuthRouter)
app.use('/student', StudentDetails)
app.use('/student', getStudentDetails)
app.use('/Admin', AdminAuthRouter)
app.use('/Post', uploadPost)


app.listen(5000, () => {
    console.log('listening on port 5000');
})