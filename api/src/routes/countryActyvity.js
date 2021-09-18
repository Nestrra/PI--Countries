
const {Router} = require('express');

const router = Router();
const {createActivity} = require('../controllers/turistActivity')


router.post('/', createActivity)

module.exports = router;

