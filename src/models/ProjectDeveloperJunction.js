const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class ProjectDeveloperJunction extends Model {
    static associate(models) {
      ProjectDeveloperJunction.belongsTo(models.Project, {
        foreignKey: 'projectId',
        onDelete: 'CASCADE',
      });
      ProjectDeveloperJunction.belongsTo(models.Developer, {
        foreignKey: 'developerId',
        onDelete: 'CASCADE',
      });
    }
  }
  ProjectDeveloperJunction.init(
    {
      projectId: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
      },
      developerId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      developerCapacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'ProjectDeveloperJunction',
      tableName: 'project_developer_junction',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );
  return ProjectDeveloperJunction;
};
