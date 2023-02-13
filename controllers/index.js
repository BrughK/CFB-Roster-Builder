const router = require('express').Router();
const apiRoutes = require('./api');

const homeRoutes = require('./home-routes');
const apiRoutes = require('./api/index');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);


module.exports = router;
