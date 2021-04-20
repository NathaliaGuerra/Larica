'use strict';

const orders = [
    {
      userId: 3,
      totalPrice: 350,
      status: 'Pagado',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 4,
      totalPrice: 1100,
      status: 'Pagado',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 5,
      totalPrice: 700,
      status: 'Pagado',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 6,
      totalPrice: 350,
      status: 'Pagado',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 7,
      totalPrice: 350,
      status: 'Pagado',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 8,
      totalPrice: 600,
      status: 'Pagado',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 9,
      totalPrice: 600,
      status: 'Pagado',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 3,
      totalPrice: 350,
      status: 'Pagado',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 11,
      totalPrice: 350,
      status: 'Pagado',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      userId: 4,
      totalPrice: 1100,
      status: 'Pagado',
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
      await queryInterface.bulkInsert('Orders', orders, {}); 
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('Orders', null, {});
  }
};
