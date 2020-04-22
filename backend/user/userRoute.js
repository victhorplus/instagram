const router = require('express').Router();
const controller = require('./userController')
const auth = require('../middleware/auth');
const storage = require('../middleware/storageImage')

router.get('/', controller.getAll);
router.get("/search/:id", controller.getByNick);

router.post('/create', storage.single("image"), controller.insert);
router.post('/auth', controller.auth);


module.exports = router;