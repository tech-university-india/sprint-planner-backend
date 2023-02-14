const { getSprints } = require('../../src/utils/sprintPlanner');
const inputs = require('./inputs');
const outputs = require('./outputs');

describe('getSprints', () => {
  // 1
  it('should return sprints ( base case)', () => {
    const { stories, developers, sprintDuration, capacity } = inputs.input1;
    const { sprints } = outputs.output1;
    expect(getSprints(stories, developers, sprintDuration, capacity)).toEqual(
      sprints
    );
  });
  // 2
  it('should return sprints ( multiple storie ending at same time )', () => {
    const { stories, developers, sprintDuration, capacity } = inputs.input2;
    const { sprints } = outputs.output2;
    expect(getSprints(stories, developers, sprintDuration, capacity)).toEqual(
      sprints
    );
  });
  // 3
  it('should return sprints ( story ending at same time sprint is ending )', () => {
    const { stories, developers, sprintDuration, capacity } = inputs.input3;
    const { sprints } = outputs.output3;
    expect(getSprints(stories, developers, sprintDuration, capacity)).toEqual(
      sprints
    );
  });
  // 4
  it('should return sprints ( base case 2)', () => {
    const { stories, developers, sprintDuration, capacity } = inputs.input4;
    const { sprints } = outputs.output4;
    expect(getSprints(stories, developers, sprintDuration, capacity)).toEqual(
      sprints
    );
  });
  // 5
  it('should throw error in case of circular dependency', () => {
    const { stories, developers, sprintDuration, capacity } = inputs.input5;
    const { err } = outputs.output5;
    expect(() =>
      getSprints(stories, developers, sprintDuration, capacity)
    ).toThrow(err);
  });
  // 6
  it('should return sprints when a developer is pre-assigned to a story', () => {
    const { stories, developers, sprintDuration, capacity } = inputs.input6;
    const { sprints } = outputs.output6;
    expect(getSprints(stories, developers, sprintDuration, capacity)).toEqual(
      sprints
    );
  });
  // 7
  it('should return sprints ( more independent stories )', () => {
    const { stories, developers, sprintDuration, capacity } = inputs.input7;
    const { sprints } = outputs.output7;
    expect(getSprints(stories, developers, sprintDuration, capacity)).toEqual(
      sprints
    );
  });
  // 8
  it('should return sprints ( more complex dependencies )', () => {
    const { stories, developers, sprintDuration, capacity } = inputs.input8;
    const { sprints } = outputs.output8;
    expect(getSprints(stories, developers, sprintDuration, capacity)).toEqual(
      sprints
    );
  });
  // 9
  it('should return sprints when more than one stories become available simultaneously', () => {
    const { stories, developers, sprintDuration, capacity } = inputs.input9;
    const { sprints } = outputs.output9;
    expect(getSprints(stories, developers, sprintDuration, capacity)).toEqual(
      sprints
    );
  });
  // 10
  it('should return sprints when more than two stories become available simultaneously', () => {
    const { stories, developers, sprintDuration, capacity } = inputs.input10;
    const { sprints } = outputs.output10;
    expect(getSprints(stories, developers, sprintDuration, capacity)).toEqual(
      sprints
    );
  });
  // 11
  it('should return sprints when more than two stories become available simultaneously', () => {
    const { stories, developers, sprintDuration, capacity } = inputs.input11;
    const { sprints } = outputs.output11;
    expect(getSprints(stories, developers, sprintDuration, capacity)).toEqual(
      sprints
    );
  });
  // 12
  it('should return sprints when more than two stories become available simultaneously and developers=2', () => {
    const { stories, developers, sprintDuration, capacity } = inputs.input12;
    const { sprints } = outputs.output12;
    expect(getSprints(stories, developers, sprintDuration, capacity)).toEqual(
      sprints
    );
  });
  // // 13
  it('should return sprints developers=1', () => {
    const { stories, developers, sprintDuration, capacity } = inputs.input13;
    const { sprints } = outputs.output13;
    expect(getSprints(stories, developers, sprintDuration, capacity)).toEqual(
      sprints
    );
  });
  // // 14
  it('should return sprints when many developers available', () => {
    const { stories, developers, sprintDuration, capacity } = inputs.input14;
    const { sprints } = outputs.output14;
    expect(getSprints(stories, developers, sprintDuration, capacity)).toEqual(
      sprints
    );
  });
  //  15
  it('should return sprints for another dependency graph when developrs=3', () => {
    const { stories, developers, sprintDuration, capacity } = inputs.input15;
    const { sprints } = outputs.output15;
    expect(getSprints(stories, developers, sprintDuration, capacity)).toEqual(
      sprints
    );
  });
  //  16
  it('should return sprints developers=2', () => {
    const { stories, developers, sprintDuration, capacity } = inputs.input16;
    const { sprints } = outputs.output16;
    expect(getSprints(stories, developers, sprintDuration, capacity)).toEqual(
      sprints
    );
  });
  //  17
  it('should return sprints when developers are more than use stories', () => {
    const { stories, developers, sprintDuration, capacity } = inputs.input17;
    const { sprints } = outputs.output17;
    expect(getSprints(stories, developers, sprintDuration, capacity)).toEqual(
      sprints
    );
  });
  // 18
  it('should throw error when no stories is given', () => {
    const { stories, developers, sprintDuration, capacity } = inputs.input18;
    const { err } = outputs.output18;
    expect(() =>
      getSprints(stories, developers, sprintDuration, capacity)
    ).toThrow(err);
  });
  // 19
  it('should throw error when no developer is given', () => {
    const { stories, developers, sprintDuration, capacity } = inputs.input19;
    const { err } = outputs.output19;
    expect(() =>
      getSprints(stories, developers, sprintDuration, capacity)
    ).toThrow(err);
  });
  // 20
  it('should return sprints when sprint duration is 3 weeks', () => {
    const { stories, developers, sprintDuration, capacity } = inputs.input20;
    const { sprints } = outputs.output20;
    expect(getSprints(stories, developers, sprintDuration, capacity)).toEqual(
      sprints
    );
  });
});
