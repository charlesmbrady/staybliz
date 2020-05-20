const router = require('express').Router();
const testsController = require('../../controllers/testsController');
const withAuth = require('../../middleware.js');

// Matches with "/api/..."

// CRUD
router.post('/project', testsController.create);
router.get('/project/:id', withAuth, testsController.getById);
router.put('/project/:id', withAuth, testsController.updateById);
// router.delete('/project/:id', withAuth, testsController.deleteById);

router.get('/projects', withAuth, testsController.getAllByUserId);

module.exports = router;
