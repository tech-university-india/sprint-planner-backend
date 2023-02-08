const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Project extends Model {
    static associate(models) {
      Project.hasMany(models.Story, { foreignKey: 'projectId', as: 'stories' });
      Project.belongsToMany(models.Developer, {
        through: 'project_developer_junction',
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
        unique: true,
      },
      duration: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: null,
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
