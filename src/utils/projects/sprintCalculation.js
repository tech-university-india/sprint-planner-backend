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
  const updatedStories = stories.map((story) => {
    const { preAssignedDeveloperId } = story;
    const x = {
      ...story,
    };
    delete x.preAssignedDeveloperId;
    return {
      ...x,
      assignedDeveloperId: preAssignedDeveloperId,
    };
  });
  const sprints = getSprints(
    updatedStories, // stories,
    developers,
    sprintDuration,
    sprintCapacity
  );

  console.log(`Sprints`, sprints);

  return { ...project, sprints };
};

module.exports = calculateSprint;
