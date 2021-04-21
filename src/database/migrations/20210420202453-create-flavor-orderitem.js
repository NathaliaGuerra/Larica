'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('flavor_orderitems', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      orderItemId: {
        type: Sequelize.INTEGER.UNSIGNED
      },
      flavorId: {
        type: Sequelize.INTEGER.UNSIGNED
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('flavor_orderitems');
  }
};