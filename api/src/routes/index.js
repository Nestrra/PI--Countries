const { Router } = require('express');

// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const countriesRout = require('./countries')

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/countries',countriesRout )
router.use('/activity', require('./countryActyvity'))



module.exports = router;
