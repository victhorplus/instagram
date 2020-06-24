const router = require('express').Router();
const controller = require('./postControllers');

const auth = require('../middleware/auth');
const storage = require('../middleware/storageImagePost');
const storage2 = require('../middleware/postStorageAWS');

router.get('/', controller.getAll);
router.get('/user/:nick', controller.getByNick);
router.get('/id/:id', controller.getById);
router.get('/date', controller.getByDate);

router.post('/create', auth, storage.single('image'), controller.create);

router.put('/edit', auth, storage.single('image'), controller.edit);

var upload = storage2.single('image');

router.post('/teste', (req, res) => {
    upload(req, res, (err) => {
        if(err) console.log(err)
        res.json({image: req.file.location})
    })
})

module.exports = router;