const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Sample extends Model {
    // static associate(models) {
    //   // define association here
    // }
  }
  Sample.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Sample',
    }
  );
  return Sample;
};
