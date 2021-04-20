'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      OrderItem.belongsTo(models.Order, {
        as: 'Order',
        foreignKey: 'productId'
      });
      OrderItem.belongsTo(models.Product, {
        as: 'Product',
        foreignKey: 'orderId'
      });
      OrderItem.belongsToMany(models.Flavor, {
        through: 'flavor_orderitem'
      });

    }
  };
  OrderItem.init({
    orderId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    productId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'OrderItem',
  });
  return OrderItem;
};