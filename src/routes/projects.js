const express = require('express');
const { PROJECT_CONTROLLER } = require('../controllers');

const router = express.Router();

router.get('/'); // fetches list of projects

router.get('/:id', PROJECT_CONTROLLER.getProject); // fetches a single project

router.post('/', PROJECT_CONTROLLER.createProject); // creates a new project

module.exports = router;
