const projectServices = require('../../src/services/projects');
const projectController = require('../../src/controllers/projects');
const projectUtils = require('../../src/utils/projects');

describe('Project Controller', () => {
  describe('createProject', () => {
    it('should return 500 if projectServices.createProject throws an error', async () => {
      const mockReq = {
        body: {
          title: 'Test Project',
          sprintDuration: 2,
          stories: [],
          developers: [],
        },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest
        .spyOn(projectServices, 'createProject')
        .mockRejectedValue(new Error('Test Error'));
      await projectController.createProject(mockReq, mockRes);
      expect(mockRes.status).toBeCalledWith(500);
      expect(mockRes.json).toBeCalledWith({ message: 'Test Error' });
    });

    it('should return 201 if projectServices.createProject returns a project', async () => {
      const mockReq = {
        body: {
          title: 'Test Project',
          sprintDuration: 2,
          stories: [],
          developers: [],
        },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockResult = { id: 1, title: 'Test Project' };
      jest
        .spyOn(projectServices, 'createProject')
        .mockResolvedValue(mockResult);
      const mockData = {
        title: 'Test Project',
        sprintDuration: 2,
        stories: [],
        developers: [],
      };
      jest.spyOn(projectUtils, 'calculateSprint').mockReturnValue(mockData);
      await projectController.createProject(mockReq, mockRes);
      expect(mockRes.status).toBeCalledWith(201);
      expect(mockRes.json).toBeCalledWith({
        message: 'Project created successfully',
        data: mockData,
      });
    });
  });

  describe('getProject', () => {
    it('should return 500 if projectServices.getProject throws an error', async () => {
      const mockReq = {
        params: {
          id: 1,
        },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest
        .spyOn(projectServices, 'getProject')
        .mockRejectedValue(new Error('Test Error'));
      await projectController.getProject(mockReq, mockRes);
      expect(mockRes.status).toBeCalledWith(500);
      expect(mockRes.json).toBeCalledWith({ message: 'Test Error' });
    });

    it('should return 404 if projectServices.getProject returns null', async () => {
      const mockReq = {
        params: {
          id: 1,
        },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      jest.spyOn(projectServices, 'getProject').mockResolvedValue(null);
      await projectController.getProject(mockReq, mockRes);
      expect(mockRes.status).toBeCalledWith(404);
      expect(mockRes.json).toBeCalledWith({ message: 'Project not found' });
    });

    it('should return 200 if projectServices.getProject returns a project', async () => {
      const mockReq = {
        params: {
          id: 1,
        },
      };
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const mockResult = { id: 1, title: 'Test Project' };
      jest.spyOn(projectServices, 'getProject').mockResolvedValue(mockResult);
      await projectController.getProject(mockReq, mockRes);
      expect(mockRes.status).toBeCalledWith(200);
      expect(mockRes.json).toBeCalledWith({
        message: 'Project fetched successfully',
        data: mockResult,
      });
    });
  });
});
