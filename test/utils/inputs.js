// const stories = [
//   {
//     id: 0,
//     dependencies: [4, 5],
//     storyPoints: 5,
//     assignedDeveloperId: 2,
//   },
//   {
//     id: 1,
//     dependencies: [3, 4],
//     storyPoints: 3,
//     assignedDeveloperId: null,
//   },
//   {
//     id: 2,
//     dependencies: [5],
//     storyPoints: 4,
//     assignedDeveloperId: null,
//   },
//   {
//     id: 3,
//     dependencies: [2],
//     storyPoints: 2,
//     assignedDeveloperId: null,
//   },
//   {
//     id: 4,
//     dependencies: [],
//     storyPoints: 6,
//     assignedDeveloperId: null,
//     // storyPoints: 5,
//   },
//   {
//     id: 5,
//     dependencies: [],
//     storyPoints: 5,
//     assignedDeveloperId: null,
//     // storyPoints: 6,
//   },
// ];
// const storiesC = [
//   {
//     id: 0,
//     dependencies: [3],
//     storyPoints: 5,
//   },
//   {
//     id: 1,
//     dependencies: [],
//     storyPoints: 3,
//   },
//   {
//     id: 2,
//     dependencies: [0, 1],
//     storyPoints: 4,
//   },
//   {
//     id: 3,
//     dependencies: [2],
//     storyPoints: 2,
//   },
// ];

// const developers = [
//   {
//     id: 0,
//     name: 'harbir',
//   },
//   {
//     id: 1,
//     name: 'mukul',
//   },
//   {
//     id: 2,
//     name: 'sahil',
//   },
// ];

const input1 = {
  stories: [
    {
      id: 0,
      dependencies: [4, 5],
      storyPoints: 5,
      assignedDeveloperId: null,
    },
    {
      id: 1,
      dependencies: [3, 4],
      storyPoints: 3,
      assignedDeveloperId: null,
    },
    {
      id: 2,
      dependencies: [5],
      storyPoints: 4,
      assignedDeveloperId: null,
    },
    {
      id: 3,
      dependencies: [2],
      storyPoints: 2,
      assignedDeveloperId: null,
    },
    {
      id: 4,
      dependencies: [],
      storyPoints: 6,
      assignedDeveloperId: null,
    },
    {
      id: 5,
      dependencies: [],
      storyPoints: 5,
      assignedDeveloperId: null,
    },
  ],
  developers: [
    {
      id: 0,
      name: 'harbir',
    },
    {
      id: 1,
      name: 'mukul',
    },
    {
      id: 2,
      name: 'sahil',
    },
  ],
  sprintDuration: 2,
  capacity: 5,
};

const input2 = {
  stories: [
    {
      id: 0,
      dependencies: [4, 5],
      storyPoints: 5,
      assignedDeveloperId: null,
    },
    {
      id: 1,
      dependencies: [3, 4],
      storyPoints: 3,
      assignedDeveloperId: null,
    },
    {
      id: 2,
      dependencies: [5],
      storyPoints: 4,
      assignedDeveloperId: null,
    },
    {
      id: 3,
      dependencies: [2],
      storyPoints: 2,
      assignedDeveloperId: null,
    },
    {
      id: 4,
      dependencies: [],
      storyPoints: 6,
      assignedDeveloperId: null,
    },
    {
      id: 5,
      dependencies: [],
      storyPoints: 5,
      assignedDeveloperId: null,
    },
  ],
  developers: [
    {
      id: 0,
      name: 'harbir',
    },
    {
      id: 1,
      name: 'mukul',
    },
  ],
  sprintDuration: 2,
  capacity: 5,
};
const input3 = {
  stories: [
    {
      id: 0,
      dependencies: [4, 5],
      storyPoints: 5,
      assignedDeveloperId: null,
    },
    {
      id: 1,
      dependencies: [3, 4],
      storyPoints: 3,
      assignedDeveloperId: null,
    },
    {
      id: 2,
      dependencies: [5],
      storyPoints: 4,
      assignedDeveloperId: null,
    },
    {
      id: 3,
      dependencies: [2],
      storyPoints: 2,
      assignedDeveloperId: null,
    },
    {
      id: 4,
      dependencies: [],
      storyPoints: 5,
      assignedDeveloperId: null,
    },
    {
      id: 5,
      dependencies: [],
      storyPoints: 6,
      assignedDeveloperId: null,
    },
  ],
  developers: [
    {
      id: 0,
      name: 'harbir',
    },
    {
      id: 1,
      name: 'mukul',
    },
  ],
  sprintDuration: 2,
  capacity: 5,
};
const input4 = {
  stories: [
    {
      id: 0,
      dependencies: [4, 5],
      storyPoints: 5,
      assignedDeveloperId: null,
    },
    {
      id: 1,
      dependencies: [3, 4],
      storyPoints: 3,
      assignedDeveloperId: null,
    },
    {
      id: 2,
      dependencies: [5],
      storyPoints: 4,
      assignedDeveloperId: null,
    },
    {
      id: 3,
      dependencies: [2],
      storyPoints: 2,
      assignedDeveloperId: null,
    },
    {
      id: 4,
      dependencies: [],
      storyPoints: 5,
      assignedDeveloperId: null,
    },
    {
      id: 5,
      dependencies: [],
      storyPoints: 6,
      assignedDeveloperId: null,
    },
  ],
  developers: [
    {
      id: 0,
      name: 'harbir',
    },
    {
      id: 1,
      name: 'mukul',
    },
    {
      id: 2,
      name: 'sahil',
    },
  ],
  sprintDuration: 2,
  capacity: 5,
};
const input5 = {
  stories: [
    {
      id: 0,
      dependencies: [3],
      storyPoints: 5,
    },
    {
      id: 1,
      dependencies: [],
      storyPoints: 3,
    },
    {
      id: 2,
      dependencies: [0, 1],
      storyPoints: 4,
    },
    {
      id: 3,
      dependencies: [2],
      storyPoints: 2,
    },
  ],
  developers: [
    {
      id: 0,
      name: 'harbir',
    },
    {
      id: 1,
      name: 'mukul',
    },
    {
      id: 2,
      name: 'sahil',
    },
  ],
  sprintDuration: 2,
  capacity: 5,
};
const input6 = {
  stories: [
    {
      id: 0,
      dependencies: [4, 5],
      storyPoints: 5,
      assignedDeveloperId: 2,
    },
    {
      id: 1,
      dependencies: [3, 4],
      storyPoints: 3,
      assignedDeveloperId: null,
    },
    {
      id: 2,
      dependencies: [5],
      storyPoints: 4,
      assignedDeveloperId: null,
    },
    {
      id: 3,
      dependencies: [2],
      storyPoints: 2,
      assignedDeveloperId: null,
    },
    {
      id: 4,
      dependencies: [],
      storyPoints: 6,
      assignedDeveloperId: null,
    },
    {
      id: 5,
      dependencies: [],
      storyPoints: 5,
      assignedDeveloperId: null,
    },
  ],
  developers: [
    {
      id: 0,
      name: 'harbir',
    },
    {
      id: 1,
      name: 'mukul',
    },
    {
      id: 2,
      name: 'sahil',
    },
  ],
  sprintDuration: 2,
  capacity: 5,
};
const input7 = {
  stories: [
    {
      id: 0,
      dependencies: [2],
      storyPoints: 5,
      assignedDeveloperId: null,
    },
    {
      id: 1,
      dependencies: [],
      storyPoints: 6,
      assignedDeveloperId: null,
    },
    {
      id: 2,
      dependencies: [],
      storyPoints: 2,
      assignedDeveloperId: null,
    },
    {
      id: 3,
      dependencies: [],
      storyPoints: 3,
      assignedDeveloperId: null,
    },
    {
      id: 4,
      dependencies: [],
      storyPoints: 5,
      assignedDeveloperId: null,
    },
    {
      id: 5,
      dependencies: [],
      storyPoints: 4,
      assignedDeveloperId: null,
    },
    {
      id: 6,
      dependencies: [],
      storyPoints: 3,
      assignedDeveloperId: null,
    },
    {
      id: 7,
      dependencies: [],
      storyPoints: 5,
      assignedDeveloperId: null,
    },
    {
      id: 8,
      dependencies: [],
      storyPoints: 6,
      assignedDeveloperId: null,
    },
  ],
  developers: [
    {
      id: 0,
      name: 'harbir',
    },
    {
      id: 1,
      name: 'mukul',
    },
    {
      id: 2,
      name: 'sahil',
    },
  ],
  sprintDuration: 2,
  capacity: 5,
};
const input8 = {
  stories: [
    {
      id: 0,
      dependencies: [],
      storyPoints: 5,
      assignedDeveloperId: null,
    },
    {
      id: 1,
      dependencies: [],
      storyPoints: 4,
      assignedDeveloperId: null,
    },
    {
      id: 2,
      dependencies: [0, 1],
      storyPoints: 5,
      assignedDeveloperId: null,
    },
    {
      id: 3,
      dependencies: [1, 2],
      storyPoints: 6,
      assignedDeveloperId: null,
    },
    {
      id: 4,
      dependencies: [0],
      storyPoints: 3,
      assignedDeveloperId: null,
    },
    {
      id: 5,
      dependencies: [2, 4],
      storyPoints: 4,
      assignedDeveloperId: null,
    },
    {
      id: 6,
      dependencies: [0, 2, 3],
      storyPoints: 3,
      assignedDeveloperId: null,
    },
    {
      id: 7,
      dependencies: [6],
      storyPoints: 6,
      assignedDeveloperId: null,
    },
  ],
  developers: [
    {
      id: 0,
      name: 'harbir',
    },
    {
      id: 1,
      name: 'mukul',
    },
  ],
  sprintDuration: 2,
  capacity: 5,
};
const input9 = {
  stories: [
    {
      id: 0,
      dependencies: [4, 3],
      storyPoints: 4,
      assignedDeveloperId: null,
    },
    {
      id: 1,
      dependencies: [3],
      storyPoints: 1,
      assignedDeveloperId: null,
    },
    {
      id: 2,
      dependencies: [3, 4],
      storyPoints: 3,
      assignedDeveloperId: null,
    },
    {
      id: 3,
      dependencies: [],
      storyPoints: 6,
      assignedDeveloperId: null,
    },
    {
      id: 4,
      dependencies: [],
      storyPoints: 5,
      assignedDeveloperId: null,
    },
  ],
  developers: [
    {
      id: 0,
      name: 'harbir',
    },
    {
      id: 1,
      name: 'mukul',
    },
    {
      id: 2,
      name: 'sahil',
    },
  ],
  sprintDuration: 2,
  capacity: 5,
};
const input10 = {
  stories: [
    {
      id: 0,
      dependencies: [4, 5],
      storyPoints: 4,
    },
    {
      id: 1,
      dependencies: [5],
      storyPoints: 1,
    },
    {
      id: 2,
      dependencies: [4, 5],
      storyPoints: 3,
    },
    {
      id: 3,
      dependencies: [0],
      storyPoints: 2,
    },
    {
      id: 4,
      dependencies: [],
      storyPoints: 5,
    },
    {
      id: 5,
      dependencies: [],
      storyPoints: 6,
    },
  ],
  developers: [
    {
      id: 0,
      name: 'harbir',
    },
    {
      id: 1,
      name: 'mukul',
    },
    {
      id: 2,
      name: 'sahil',
    },
  ],
  sprintDuration: 2,
  capacity: 5,
};
const input11 = {
  stories: [
    {
      id: 0,
      dependencies: [],
      storyPoints: 3,
      assignedDeveloperId: null,
    },
    {
      id: 1,
      dependencies: [0, 3],
      storyPoints: 6,
      assignedDeveloperId: null,
    },
    {
      id: 2,
      dependencies: [1, 5],
      storyPoints: 5,
      assignedDeveloperId: null,
    },
    {
      id: 3,
      dependencies: [],
      storyPoints: 4,
      assignedDeveloperId: null,
    },
    {
      id: 4,
      dependencies: [1, 5],
      storyPoints: 3,
      assignedDeveloperId: null,
    },
    {
      id: 5,
      dependencies: [],
      storyPoints: 11,
      assignedDeveloperId: null,
    },
  ],
  developers: [
    {
      id: 0,
      name: 'harbir',
    },
    {
      id: 1,
      name: 'mukul',
    },
    {
      id: 2,
      name: 'sahil',
    },
  ],
  sprintDuration: 2,
  capacity: 5,
};
const input12 = {
  stories: [
    {
      id: 0,
      dependencies: [],
      storyPoints: 3,
      assignedDeveloperId: null,
    },
    {
      id: 1,
      dependencies: [0, 3],
      storyPoints: 6,
      assignedDeveloperId: null,
    },
    {
      id: 2,
      dependencies: [1, 5],
      storyPoints: 5,
      assignedDeveloperId: null,
    },
    {
      id: 3,
      dependencies: [],
      storyPoints: 4,
      assignedDeveloperId: null,
    },
    {
      id: 4,
      dependencies: [1, 5],
      storyPoints: 3,
      assignedDeveloperId: null,
    },
    {
      id: 5,
      dependencies: [],
      storyPoints: 11,
      assignedDeveloperId: null,
    },
  ],
  developers: [
    {
      id: 0,
      name: 'harbir',
    },
    {
      id: 1,
      name: 'mukul',
    },
  ],
  sprintDuration: 2,
  capacity: 5,
};
const input13 = {
  stories: [
    {
      id: 0,
      dependencies: [],
      storyPoints: 3,
      assignedDeveloperId: null,
    },
    {
      id: 1,
      dependencies: [0, 3],
      storyPoints: 6,
      assignedDeveloperId: null,
    },
    {
      id: 2,
      dependencies: [1, 5],
      storyPoints: 5,
      assignedDeveloperId: null,
    },
    {
      id: 3,
      dependencies: [],
      storyPoints: 4,
      assignedDeveloperId: null,
    },
    {
      id: 4,
      dependencies: [1, 5],
      storyPoints: 3,
      assignedDeveloperId: null,
    },
    {
      id: 5,
      dependencies: [],
      storyPoints: 11,
      assignedDeveloperId: null,
    },
  ],
  developers: [
    {
      id: 0,
      name: 'harbir',
    },
  ],
  sprintDuration: 2,
  capacity: 5,
};
const input14 = {
  stories: [
    {
      id: 0,
      dependencies: [],
      storyPoints: 3,
      assignedDeveloperId: null,
    },
    {
      id: 1,
      dependencies: [0, 3],
      storyPoints: 6,
      assignedDeveloperId: null,
    },
    {
      id: 2,
      dependencies: [1, 5],
      storyPoints: 5,
      assignedDeveloperId: null,
    },
    {
      id: 3,
      dependencies: [],
      storyPoints: 4,
      assignedDeveloperId: null,
    },
    {
      id: 4,
      dependencies: [1, 5],
      storyPoints: 3,
      assignedDeveloperId: null,
    },
    {
      id: 5,
      dependencies: [],
      storyPoints: 11,
      assignedDeveloperId: null,
    },
  ],
  developers: [
    {
      id: 0,
      name: 'harbir',
    },
    {
      id: 1,
      name: 'mukul',
    },
    {
      id: 2,
      name: 'sahil',
    },
    {
      id: 3,
      name: 'ram',
    },
  ],
  sprintDuration: 2,
  capacity: 5,
};
const input15 = {
  stories: [
    {
      id: 0,
      dependencies: [1],
      storyPoints: 5,
      assignedDeveloperId: null,
    },
    {
      id: 1,
      dependencies: [3],
      storyPoints: 6,
      assignedDeveloperId: null,
    },
    {
      id: 2,
      dependencies: [1, 3],
      storyPoints: 9,
      assignedDeveloperId: null,
    },
    {
      id: 3,
      dependencies: [],
      storyPoints: 8,
      assignedDeveloperId: null,
    },
    {
      id: 4,
      dependencies: [3],
      storyPoints: 2,
      assignedDeveloperId: null,
    },
  ],
  developers: [
    {
      id: 0,
      name: 'harbir',
    },
    {
      id: 1,
      name: 'mukul',
    },
    {
      id: 2,
      name: 'sahil',
    },
  ],
  sprintDuration: 2,
  capacity: 5,
};
const input16 = {
  stories: [
    {
      id: 0,
      dependencies: [1],
      storyPoints: 5,
      assignedDeveloperId: null,
    },
    {
      id: 1,
      dependencies: [3],
      storyPoints: 6,
      assignedDeveloperId: null,
    },
    {
      id: 2,
      dependencies: [1, 3],
      storyPoints: 9,
      assignedDeveloperId: null,
    },
    {
      id: 3,
      dependencies: [],
      storyPoints: 8,
      assignedDeveloperId: null,
    },
    {
      id: 4,
      dependencies: [3],
      storyPoints: 2,
      assignedDeveloperId: null,
    },
  ],
  developers: [
    {
      id: 0,
      name: 'harbir',
    },
    {
      id: 1,
      name: 'mukul',
    },
  ],
  sprintDuration: 2,
  capacity: 5,
};
const input17 = {
  stories: [
    {
      id: 0,
      dependencies: [1],
      storyPoints: 5,
      assignedDeveloperId: null,
    },
    {
      id: 1,
      dependencies: [3],
      storyPoints: 6,
      assignedDeveloperId: null,
    },
    {
      id: 2,
      dependencies: [1, 3],
      storyPoints: 9,
      assignedDeveloperId: null,
    },
    {
      id: 3,
      dependencies: [],
      storyPoints: 8,
      assignedDeveloperId: null,
    },
    {
      id: 4,
      dependencies: [3],
      storyPoints: 2,
      assignedDeveloperId: null,
    },
  ],
  developers: [
    {
      id: 0,
      name: 'harbir',
    },
    {
      id: 1,
      name: 'mukul',
    },
    {
      id: 2,
      name: 'sahil',
    },
    {
      id: 3,
      name: 'ram',
    },
  ],
  sprintDuration: 2,
  capacity: 5,
};
const input18 = {
  stories: [],
  developers: [
    {
      id: 0,
      name: 'harbir',
    },
  ],
  sprintDuration: 2,
  capacity: 5,
};
const input19 = {
  stories: [
    {
      id: 0,
      dependencies: [1],
      storyPoints: 5,
      assignedDeveloperId: null,
    },
    {
      id: 1,
      dependencies: [2],
      storyPoints: 6,
      assignedDeveloperId: null,
    },
    {
      id: 2,
      dependencies: [],
      storyPoints: 6,
      assignedDeveloperId: null,
    },
  ],
  developers: [],
  sprintDuration: 2,
  capacity: 5,
};

const input20 = {
  stories: [
    {
      id: 0,
      dependencies: [],
      storyPoints: 3,
      assignedDeveloperId: null,
    },
    {
      id: 1,
      dependencies: [0, 3],
      storyPoints: 6,
      assignedDeveloperId: null,
    },
    {
      id: 2,
      dependencies: [1, 5],
      storyPoints: 5,
      assignedDeveloperId: null,
    },
    {
      id: 3,
      dependencies: [],
      storyPoints: 4,
      assignedDeveloperId: null,
    },
    {
      id: 4,
      dependencies: [1, 5],
      storyPoints: 3,
      assignedDeveloperId: null,
    },
    {
      id: 5,
      dependencies: [],
      storyPoints: 11,
      assignedDeveloperId: null,
    },
  ],
  developers: [
    {
      id: 0,
      name: 'harbir',
    },
  ],
  sprintDuration: 3,
  capacity: 5,
};

const inputs = {
  input1,
  input2,
  input3,
  input4,
  input5,
  input6,
  input7,
  input8,
  input9,
  input10,
  input11,
  input12,
  input13,
  input14,
  input15,
  input16,
  input17,
  input18,
  input19,
  input20,
};
module.exports = inputs;
