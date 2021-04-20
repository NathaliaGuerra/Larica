'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flavor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Flavor.belongsTo(models.FlavorCategory, {
        as: 'FlavorCategory',
        foreignKey: 'flavorCategoryId'
      });
      Flavor.belongsToMany(models.OrderItem, {
        through: 'flavor_orderitem'
      });

    }
    
  };
  Flavor.init({
    flavorCategoryId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: DataTypes.STRING,
    photo: DataTypes.STRING,
    status: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Flavor',
  });
  return Flavor;
};