const router = require('express').Router();
const testsController = require('../../controllers/testsController');
const withAuth = require('../../middleware.js');

// Matches with "/api/..."

// CRUD
router.post('/tests', testsController.create);
router.get('/tests/:id', withAuth, testsController.getById);
router.put('/tests/:id', withAuth, testsController.updateById);
// router.delete('/project/:id', withAuth, testsController.deleteById);

router.get('/tests', withAuth, testsController.getAllByUserId);

module.exports = router;
