const express = require('express');
const { PROJECT_CONTROLLER } = require('../controllers');
const { validateRequest, validateParams } = require('../middlewares/validate');

const {
  createProjectRequest,
  getProjectParams,
} = require('../schemas/project');

const router = express.Router();

router.get('/'); // fetches list of projects

router.get(
  '/:id',
  validateParams(getProjectParams),
  PROJECT_CONTROLLER.getProject
); // fetches a single project

router.post(
  '/',
  validateRequest(createProjectRequest),
  PROJECT_CONTROLLER.createProject
); // creates a new project

module.exports = router;
