
const {Router} = require('express');

const router = Router();
const {getAllCountries, getCountryId} = require('../controllers/countries')


router.get('/', getAllCountries)
router.get('/:idCountry', getCountryId)



module.exports = router;

