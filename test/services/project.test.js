const projectServices = require('../../src/services/projects');
const { Project, Story, Developer } = require('../../src/models');

describe('Project Services', () => {
  describe('createProject', () => {
    it('should throw an error if Project.create throws an error', async () => {
      const mockProject = {
        title: 'Test Project',
        sprintDuration: 2,
        stories: [],
        developers: [],
      };
      jest.spyOn(Project, 'create').mockRejectedValue(new Error('Test Error'));
      jest.spyOn(Story, 'bulkCreate').mockResolvedValue();
      jest.spyOn(Developer, 'bulkCreate').mockResolvedValue();
      jest.spyOn(Project, 'findOne').mockResolvedValue(mockProject);
      await expect(projectServices.createProject(mockProject)).rejects.toThrow(
        'Test Error'
      );
    });

    it('should throw an error if Story.bulkCreate throws an error', async () => {
      const mockProject = {
        title: 'Test Project',
        sprintDuration: 2,
        stories: [],
        developers: [],
      };
      jest.spyOn(Project, 'create').mockResolvedValue(mockProject);
      jest
        .spyOn(Story, 'bulkCreate')
        .mockRejectedValue(new Error('Test Error'));
      jest.spyOn(Developer, 'bulkCreate').mockResolvedValue();
      jest.spyOn(Project, 'findOne').mockResolvedValue(mockProject);
      await expect(projectServices.createProject(mockProject)).rejects.toThrow(
        'Test Error'
      );
    });

    it('should throw an error if Developer.bulkCreate throws an error', async () => {
      const mockProject = {
        title: 'Test Project',
        sprintDuration: 2,
        stories: [],
        developers: [],
      };
      jest.spyOn(Project, 'create').mockResolvedValue(mockProject);
      jest.spyOn(Story, 'bulkCreate').mockResolvedValue();
      jest
        .spyOn(Developer, 'bulkCreate')
        .mockRejectedValue(new Error('Test Error'));
      jest.spyOn(Project, 'findOne').mockResolvedValue(mockProject);
      await expect(projectServices.createProject(mockProject)).rejects.toThrow(
        'Test Error'
      );
    });

    it('should throw an error if Project.findOne throws an error', async () => {
      const mockProject = {
        title: 'Test Project',
        sprintDuration: 2,
        stories: [],
        developers: [],
      };
      jest.spyOn(Project, 'create').mockResolvedValue(mockProject);
      jest.spyOn(Story, 'bulkCreate').mockResolvedValue();
      jest.spyOn(Developer, 'bulkCreate').mockResolvedValue();
      jest.spyOn(Project, 'findOne').mockRejectedValue(new Error('Test Error'));
      await expect(projectServices.createProject(mockProject)).rejects.toThrow(
        'Test Error'
      );
    });

    it('should return a project if Project.create returns a project', async () => {
      const mockProject = {
        title: 'Test Project',
        sprintDuration: 2,
        stories: [{ name: 'story1' }, { name: 'story1' }],
        developers: [{ name: 'developer:1' }, { name: 'developer2' }],
      };
      const mockResult = { id: 1, title: 'Test Project' };
      jest.spyOn(Project, 'create').mockResolvedValue(mockResult);
      jest.spyOn(Story, 'bulkCreate').mockResolvedValue();
      jest.spyOn(Developer, 'bulkCreate').mockResolvedValue();
      jest.spyOn(Project, 'findOne').mockResolvedValue(mockResult);
      await expect(projectServices.createProject(mockProject)).resolves.toEqual(
        mockResult
      );
    });
  });

  describe('getProject', () => {
    it('should throw an error if Project.findOne throws an error', async () => {
      jest.spyOn(Project, 'findOne').mockRejectedValue(new Error('Test Error'));
      await expect(projectServices.getProject(1)).rejects.toThrow('Test Error');
    });

    it('should return a project if Project.findOne returns a project', async () => {
      const mockResult = { id: 1, title: 'Test Project' };
      jest.spyOn(Project, 'findOne').mockResolvedValue(mockResult);
      await expect(projectServices.getProject(1)).resolves.toEqual(mockResult);
    });
  });
});
