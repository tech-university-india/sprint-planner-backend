const { Project, Story, Developer } = require('../models');

/*
static associate(models) {
      Project.hasMany(models.Story, { foreignKey: 'projectId', as: 'stories' });
      Project.belongsToMany(models.Developer, {
        through: 'project_developer_junction',
        foreignKey: 'projectId',
        as: 'developers',
      });
*/
const getProject = async (id) => {
  // include stories and developers
  const project = await Project.findOne({
    where: { id },
    include: ['stories', 'developers'],
  });
  return project;
};

const createProject = async (project) => {
  const { stories, developers, ...newProject } = project;
  const savedProject = await Project.create(newProject);

  // ------------------ Can be shifted to funtion in respective models ------------------
  const storiesWithProjectId = stories.map((story) => ({
    ...story,
    projectId: savedProject.id,
  }));
  await Story.bulkCreate(storiesWithProjectId);

  const developersWithProjectId = developers.map((developer) => ({
    ...developer,
    projectId: savedProject.id,
  }));
  await Developer.bulkCreate(developersWithProjectId);
  // --------------------------------------------------------------------------------

  const result = await Project.findOne({
    where: { id: savedProject.id },
    include: ['stories', 'developers'],
  });
  return result;
};

module.exports = {
  getProject,
  createProject,
};
