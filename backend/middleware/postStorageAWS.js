const aws = require('aws-sdk')
const multer = require('multer')
const multerS3 = require('multer-s3')
 
aws.config = {
    secretAccessKey: '7dXsBD6ndLrTEO6VXOiwO+iH7NC/vfh24QbCD7F',
    accessKeyId: 'ASIAUGR3WEFVJBHZNCUK',
    region: 'us-east-1'
}

var s3 = new aws.S3()
 
var upload = multer({
  storage: multerS3({
    s3: s3,
    bucket: 'storage-nuvemgram/post',
    metadata: function (req, file, cb) {
        cb(null, {
          owner: req.headers.nick,
          teste: 'teste META DATA'
        });
    },
    key: function (req, file, cb) {
        var name = `${req.headers.nick}_${Date.now()}_${file.originalname}`;
        cb(null, name)
    }
  })
})

module.exports = upload;