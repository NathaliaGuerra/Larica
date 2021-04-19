'use strict';

const faker = require('faker');

const products = [...Array(100)].map((product) =>(
    {
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
        category: faker.random.arrayElement([
          'Chocolates',
          'Dulce de Leche',
          'Cremas',
          'Frutales',
          'Veganos',
          'Especiales'
        ]),
        price: faker.commerce.price(),
        photo: null,
        status: faker.random.arrayElement([ true, false ]),
        createdAt: new Date(),
        updatedAt: new Date()
    }
))

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
