const router = require('express').Router();

router.get('/', (req, res) => {
    res.send({message: "Rota GET index"})
})

module.exports = router;