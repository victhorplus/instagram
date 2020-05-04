const router = require('express').Router();
const controller = require('./postControllers');

const auth = require('../middleware/auth');
const storage = require('../middleware/storageImagePost');

router.get('/', controller.getAll);
router.get('/user/:nick', controller.getByNick);
router.get('/id/:id', controller.getById);
router.get('/date', controller.getByDate);

router.post('/create', auth, storage.single('image'), controller.create);

router.put('/edit', auth, storage.single('image'), controller.edit);

// router.get('/teste', controller.teste)

module.exports = router;