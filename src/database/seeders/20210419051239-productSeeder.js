'use strict';

const faker = require('faker');

const products = [
    {
        name: '1/4 kg.',
        price: 350,
        flavorLimit: 3,
        photo: faker.commerce.photo,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: '1/2 kg.',
        price: 600,
        flavorLimit: 5,
        photo: faker.commerce.photo,
        status: true,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: '1 kg.',
        price: 1100,
        flavorLimit: 7,
        photo: faker.commerce.photo,
        status: true,
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
      await queryInterface.bulkInsert('Products', products, {}); 
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
      await queryInterface.bulkDelete('Products', null, {});
  }
};
