const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Developer extends Model {
    static associate(models) {
      //   Developer.hasMany(models.Story, { foreignKey: 'projectId' });
      Developer.belongsTo(models.Project, {
        foreignKey: 'projectId',
        as: 'project',
        onDelete: 'CASCADE',
      });
    }
  }
  Developer.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      capacity: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      projectId: {
        type: DataTypes.UUID,
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
