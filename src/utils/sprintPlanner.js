// find dependency graph and indegree of all nodes
const getDependencyGraph = (stories) => {
  const dependencyGraph = [];
  const indegrees = {};
  for (let i = 0; i < stories.length; i++) {
    dependencyGraph.push([]);
    indegrees[i] = stories[i].dependencies.length;
  }
  for (let i = 0; i < stories.length; i++) {
    for (let j = 0; j < stories[i].dependencies.length; j++) {
      dependencyGraph[stories[i].dependencies[j]].push(i);
    }
  }
  return { dependencyGraph, indegrees };
};

// check for cyclic dependencies
const checkCycleInDependencyGraphUtil = (
  v,
  dependencyGraph,
  visited,
  stack
) => {
  if (stack[v]) {
    return true;
  }
  if (visited[v]) {
    return false;
  }
  visited[v] = true;
  stack[v] = true;
  for (let i = 0; i < dependencyGraph[v].length; i++) {
    if (
      checkCycleInDependencyGraphUtil(
        dependencyGraph[v][i],
        dependencyGraph,
        visited,
        stack
      )
    ) {
      return true;
    }
  }
  stack[v] = false;
  return false;
};
const checkCycleInDependencyGraph = (dependencyGraph) => {
  const visited = {};
  const stack = {};
  for (let i = 0; i < dependencyGraph.length; i++) {
    visited[i] = false;
    stack[i] = false;
  }
  for (let i = 0; i < dependencyGraph.length; i++) {
    if (checkCycleInDependencyGraphUtil(i, dependencyGraph, visited, stack)) {
      return true;
    }
  }
  return false;
};

// initialize pending, available and isComplete stories lists
const initialzeLists = (pending, available, isComplete, indegrees, stories) => {
  for (let i = 0; i < stories.length; i++) {
    if (indegrees[i] === 0) {
      available.push(i);
    } else {
      pending.push(i);
    }
    isComplete[i] = false;
  }
  pending.sort();
  available.sort();
  //   return { pending, available };
};

// update pending and available stories lists
const updateLists = (pending, available, indegrees, stories) => {
  let i = 0;
  while (i < pending.length) {
    if (indegrees[pending[i]] === 0) {
      available.push(pending[i]);
      pending.splice(i, 1);
    } else {
      i++;
    }
  }
  pending.sort();
  available.sort();
};

// initialize the stories
const initializeStories = (stories) => {
  for (let i = 0; i < stories.length; i++) {
    stories[i].startDay = -1;
    stories[i].endDay = -1;
    stories[i].dummyDevs = [];
    stories[i].remainingDuration = stories[i].duration;
  }
};

// create dummy developers
const createDummyDevlopers = (totalDevelopers) => {
  const dummyDevs = [];
  for (let i = 0; i < totalDevelopers; i++) {
    dummyDevs.push(i);
  }
  return dummyDevs;
};

// plan stories based on dependency graph
const planStories = (stories, developers, dependencyGraph, indegrees) => {
  if (checkCycleInDependencyGraph(dependencyGraph)) {
    throw new Error('Cycle detected in dependencies');
  }
  let currentDay = 0;
  let devsAvailable = developers.length;
  const pending = []; // stories with indegrees > 0
  const available = []; // stories with indegrees = 0
  const inProgress = [];
  const isComplete = [];

  initialzeLists(pending, available, isComplete, indegrees, stories);

  while (isComplete.some((x) => x === false)) {
    // assign stories to developers
    while (available.length > 0 && devsAvailable > 0) {
      const storyID = available.splice(0, 1)[0];
      const developer = developers.splice(0, 1)[0];
      stories[storyID].dummyDevs.push(developer);
      stories[storyID].startDay = currentDay;
      inProgress.push(storyID);
      inProgress.sort();
      devsAvailable--;
    }
    // assign all devs to highest priority story
    if (devsAvailable > 0) {
      const storyID = Math.min(...inProgress);
      stories[storyID].dummyDevs.push(...developers);
      while (developers.length > 0) developers.pop();
      devsAvailable = 0;
    }

    // update currentDay
    currentDay += 1;

    // update remainingDuration and isComplete list
    for (let i = 0; i < inProgress.length; i++) {
      stories[inProgress[i]].remainingDuration -=
        1 * stories[inProgress[i]].dummyDevs.length;

      if (stories[inProgress[i]].remainingDuration <= 0) {
        stories[inProgress[i]].endDay = currentDay;
        isComplete[inProgress[i]] = true;
        const freeDevs = stories[inProgress[i]].dummyDevs;
        developers.push(...freeDevs);
        devsAvailable += freeDevs.length;
        // update indegrees
        for (let j = 0; j < dependencyGraph[inProgress[i]].length; j++) {
          indegrees[dependencyGraph[inProgress[i]][j]]--;
        }
      }
    }
    // remove completed stories from inProgress
    let i = 0;
    while (inProgress.length > 0 && i < inProgress.length) {
      if (isComplete[inProgress[i]] === true) {
        inProgress.splice(i, 1);
      } else {
        i++;
      }
    }

    // update pending and available
    updateLists(pending, available, indegrees, stories);
  }
  return currentDay;
};

// map dummyDevs to real devs and remove dummyDevs
const mapDevlopersToStoriesUtil = (stories, developers) => {
  const dummyDevToRealDev = {};
  const availableDevelopers = [];
  const remainingDummyDevs = [];
  for (let i = 0; i < developers.length; i++) {
    availableDevelopers.push(developers[i].id);
    remainingDummyDevs.push(i);
  }
  for (let i = 0; i < stories.length; i++) {
    if (stories[i].assignedDeveloperId) {
      dummyDevToRealDev[stories[i].dummyDevs[0]] =
        stories[i].assignedDeveloperId;
      availableDevelopers.splice(
        availableDevelopers.indexOf(stories[i].assignedDeveloperId),
        1
      );
      remainingDummyDevs.splice(
        remainingDummyDevs.indexOf(stories[i].dummyDevs[0]),
        1
      );
    }
  }
  let i = 0;
  while (i < stories.length && dummyDevToRealDev.length !== developers.length) {
    if (
      dummyDevToRealDev[stories[i].dummyDevs[0]] === undefined &&
      !stories[i].assignedDeveloperId
    ) {
      dummyDevToRealDev[stories[i].dummyDevs[0]] = availableDevelopers[0];
      availableDevelopers.splice(0, 1);
      remainingDummyDevs.splice(
        remainingDummyDevs.indexOf(stories[i].dummyDevs[0]),
        1
      );
    }
    i++;
  }
  for (let i = 0; i < remainingDummyDevs.length; i++) {
    dummyDevToRealDev[remainingDummyDevs[i]] = availableDevelopers[i];
  }
  return dummyDevToRealDev;
};

const mapDevlopersToStories = (stories, developers) => {
  const dummyDevToRealDev = mapDevlopersToStoriesUtil(stories, developers);

  for (let i = 0; i < stories.length; i++) {
    stories[i].developers = [];
    for (let j = 0; j < stories[i].dummyDevs.length; j++) {
      stories[i].developers.push(
        developers[dummyDevToRealDev[stories[i].dummyDevs[j]]]
      );
      stories[i].assignedDeveloperId = stories[i].developers[0].id;
    }
    delete stories[i].dummyDevs;
  }
};

// plan the sprints using stories startDay and endDay
const planSprints = (stories, numberOfSprints, sprintDuration, capacity) => {
  const sprints = [];
  for (let i = 0; i < numberOfSprints; i++) {
    sprints.push([]);
  }
  for (let i = 0; i < stories.length; i++) {
    const sprintNumberStart = Math.floor(
      stories[i].startDay / (sprintDuration * capacity)
    );
    const sprintNumberEnd = Math.floor(
      (stories[i].endDay - 1) / (sprintDuration * capacity)
    );
    sprints[sprintNumberStart].push(stories[i]);
    if (sprintNumberStart !== sprintNumberEnd) {
      sprints[sprintNumberEnd].push(stories[i]);
    }
  }
  // sort stories in each sprint by startDay
  for (let i = 0; i < sprints.length; i++) {
    sprints[i].sort((a, b) => a.startDay - b.startDay);
  }
  return sprints;
};

// main function
const getSprints = (stories, developers, sprintDuration, capacity) => {
  if (developers.length === 0) throw new Error('No developers available');
  if (stories.length === 0) throw new Error('No stories available');
  const { dependencyGraph, indegrees } = getDependencyGraph(stories);
  initializeStories(stories);
  const dummyDevs = createDummyDevlopers(developers.length);

  const totalDuration = planStories(
    stories,
    dummyDevs,
    dependencyGraph,
    indegrees
  );
  const numberOfSprints = Math.ceil(
    totalDuration / (sprintDuration * capacity)
  );
  mapDevlopersToStories(stories, developers);
  const sprints = planSprints(
    stories,
    numberOfSprints,
    sprintDuration,
    capacity
  );
  return sprints;
};

module.exports = { getSprints };
