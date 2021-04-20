'use strict';

const faker = require('faker');

const flavors = [...Array(30)].map((flavor) =>(
    {
        flavorCategoryId: faker.random.arrayElement([1,2,3,4,5,6]),
        name: faker.commerce.productName(),
        description: faker.commerce.productDescription(),
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
     await queryInterface.bulkInsert('Flavors', flavors, {}); 
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Flavors', null, {});
  }
};
