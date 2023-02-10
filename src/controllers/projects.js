const { PROJECT_SERVICES } = require('../services');

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
    return res.status(500).json({ message: error.message });
  }
};

const createProject = async (req, res) => {
  try {
    // data preparation required
    const { title, sprintDuration, stories, developers } = req.body;
    const result = await PROJECT_SERVICES.createProject({
      title,
      sprintDuration,
      stories,
      developers,
    });
    return res.status(201).json({
      message: 'Project created successfully',
      data: result,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProject,
  createProject,
};
