const express = require('express');
const router = express.Router();
// const multer = require('multer');
// const AWS = require('aws-sdk');

// const storage = multer.memoryStorage({
//   destination: function(req, file, callback) {
//     callback(null, '');
//   }
// });

// // image is the key!
// const upload = multer({storage}).single('image');

// const s3 = new AWS.S3({
//   apiVersion: '2006-03-01'
// })

// router.post('/image-upload', upload, (req, res) => {
//   // set up params config
//   // set up S3 service call
// });

const upload = require('../services/file-upload');

const singleUpload = upload.single('image');

router.post('/image-upload', (req, res) => {
    singleUpload(req, res, err => {
        return res.json({'imageUrl' : req.file.location});
    });
});

// router.get('/users', (req, res) => {
//     res.json({"which": "which"})
// });




module.exports = router;
