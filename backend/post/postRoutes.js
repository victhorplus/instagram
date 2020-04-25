const router = require('express').Router();
const controller = require('./postControllers');

router.get('/', controller.getAll);
router.get('/user/:nick', controller.getByNick);
router.get('/id/:id', controller.getById);
router.get('/date', controller.getByDate);

router.get('/teste', controller.teste)

module.exports = router;