'use strict';

const flavorCategories = [
  {
    name: 'Chocolates',
    status: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Dulce de Leche',
    status: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Cremas',
    status: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Frutales',
    status: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Veganos',
    status: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Especiales',
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
      await queryInterface.bulkInsert('FlavorCategories', flavorCategories, {});  
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('FlavorCategories', null, {}); 
  }
};
