const router = require('express').Router();
const projectsController = require('../../controllers/projectsController');
const withAuth = require('../../middleware.js');

// Matches with "/api/..."

// CRUD
router.post('/project', projectsController.create);
router.get('/project/:id', withAuth, projectsController.getById);
router.put('/project/:id', withAuth, projectsController.updateById);
// router.delete('/project/:id', withAuth, projectsController.deleteById);

router.get('/projects', withAuth, projectsController.getAllByUserId);

module.exports = router;
