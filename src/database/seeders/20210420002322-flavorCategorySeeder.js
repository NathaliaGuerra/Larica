'use strict';

const flavorCategories = [
  {
    name: 'Chocolates',
    photo:'chocolates.jpg',
    status: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Dulce de Leche',
    photo:'dulces-de-leche.jpg',
    status: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Cremas',
    photo:'cremas.jpg',
    status: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Frutales',
    photo:'frutales.jpg',
    status: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Veganos',
    photo:'veganos.jpg',
    status: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    name: 'Especiales',
    photo:'especiales.jpg',
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
