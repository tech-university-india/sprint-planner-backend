const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Story extends Model {
    static associate(models) {
      Story.belongsTo(models.Project, {
        foreignKey: 'projectId',
        onDelete: 'CASCADE',
        as: 'project',
      });
      //   Story.belongsTo(models.Developer, { foreignKey: 'developerId' });
    }
  }
  Story.init(
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      storyPoints: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      dependencies: {
        type: DataTypes.ARRAY(DataTypes.STRING),
        defaultValue: [],
      },
      //   developerId: {
      //     type: DataTypes.INTEGER,
      //     allowNull: true,
      //   },
      projectId: {
        type: DataTypes.UUID,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Story',
      tableName: 'story',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );
  return Story;
};
