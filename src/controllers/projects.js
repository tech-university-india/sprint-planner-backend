const { PROJECT_SERVICES } = require('../services');
const PROJECT_UTILS = require('../utils/projects');

const getProject = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await PROJECT_SERVICES.getProject(id);
    if (result) {
      return res.status(200).json({
        message: 'Project fetched successfully',
        data: result,
      });
    }
    return res.status(404).json({ message: 'Project not found' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

const createProject = async (req, res) => {
  try {
    // data format to be validated
    const { title, sprintDuration, sprintCapacity, stories, developers } =
      req.body;
    const result = await PROJECT_SERVICES.createProject({
      title,
      sprintDuration,
      sprintCapacity,
      stories,
      developers,
    });
    // do sprint calculation on this data
    const sprintCalculation = PROJECT_UTILS.calculateSprint(
      JSON.parse(JSON.stringify(result))
    );
    return res.status(201).json({
      message: 'Project created successfully',
      data: sprintCalculation,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProject,
  createProject,
};
