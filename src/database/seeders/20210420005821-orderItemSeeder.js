'use strict';

const orderItems = [
  {
    orderId: 1,
    productId: 1,
    price: 350,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    orderId: 2,
    productId: 3,
    price: 1100,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    orderId: 3,
    productId: 1,
    price: 350,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    orderId: 3,
    productId: 1,
    price: 350,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    orderId: 4,
    productId: 1,
    price: 350,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    orderId: 5,
    productId: 1,
    price: 350,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    orderId: 6,
    productId: 2,
    price: 600,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    orderId: 7,
    productId: 2,
    price: 600,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    orderId: 8,
    productId: 1,
    price: 350,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    orderId: 9,
    productId: 1,
    price: 350,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    orderId: 10,
    productId: 3,
    price: 1100,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('OrderItems', orderItems, {}); 
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('OrderItems', null, {});
  }
};
