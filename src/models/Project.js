const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      Project.hasMany(models.Story, { foreignKey: 'projectId', as: 'stories' });
      Project.hasMany(models.Developer, {
        foreignKey: 'projectId',
        as: 'developers',
      });
    }
  }
  Project.init(
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
      },
      sprintDuration: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 2, // 2 weeks (= 10 working days)
      },
      sprintCapacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Project',
      tableName: 'project',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );
  return Project;
};
