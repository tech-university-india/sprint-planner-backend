const { getSprints } = require('../sprintPlanner');

const calculateSprint = (project) => {
  // data preparation
  console.log(project);
  const { stories, developers, sprintDuration, sprintCapacity } = project;
  /*
  let storyMap;
  let developerMap;
  [stories, storyMap] = mapStoriesToNumberIds(stories);
  [developers, developerMap] = mapDevelopersToNumberIds(developers);
  */
  const sprints = getSprints(
    stories,
    developers,
    sprintDuration,
    sprintCapacity
  );

  console.log(`Sprints`, sprints);

  return { ...project, ...sprints };
};

module.exports = calculateSprint;
