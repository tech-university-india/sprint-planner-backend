const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Developer extends Model {
    static associate(models) {
      //   Developer.hasMany(models.Story, { foreignKey: 'projectId' });
      Developer.belongsToMany(models.Project, {
        through: 'project_developer_junction',
        foreignKey: 'developerId',
        as: 'projects',
      });
    }
  }
  Developer.init(
    {
      fmno: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Developer',
      tableName: 'developer',
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    }
  );
  return Developer;
};
