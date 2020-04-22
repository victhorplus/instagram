const multer = require('multer');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/')
    },
    filename: (req, file, cb) => {
        req.body.image = `${req.body.nick}_${Date.now()}_${file.originalname}`;
        console.log("Nome da imagem: "+req.body.image);
        cb(null, req.body.image)
    }
});

const upload = multer({storage});

module.exports = upload;