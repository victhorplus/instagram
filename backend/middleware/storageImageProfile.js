const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/profile/')
    },
    filename: (req, file, cb) => {
        req.body.image = `${req.body.nick}_${Date.now()}_${file.originalname}`;
        cb(null, req.body.image)
    }
});

const upload = multer({storage});

module.exports = upload;