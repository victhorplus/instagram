const router = require('express').Router();
const controller = require('./userController')
const auth = require('../auth');

router.get('/', controller.getAll);
router.get("/search/:id", controller.getByNick);

router.post('/create', controller.insert);
router.post('/auth', controller.auth);


module.exports = router;