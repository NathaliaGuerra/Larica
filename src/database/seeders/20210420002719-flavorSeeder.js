'use strict';

const flavors = [
  {
      flavorCategoryId: 1,
      name:'Chocolate',
      description:'Crema helada de chocolate semi amargo.',
      photo: 'chocolate.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 1,
      name:'Chocolate Blanco',
      description:'Crema helada de chocolate blanco con granizado de chocolate blanco.',
      photo: 'chocolate-blanco.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
     
      flavorCategoryId: 1,
      name:'Chocolate Amargo',
      description:'Crema helada de chocolate con salsa y trocitos de chocolate amargo',
      photo: 'chocolate-amargo.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 1,
      name:'Chocolate Con Almendras',
      description:'Crema helada de chocolate semi amargo con almendras partidas garrapiñadas.',
      photo: 'ProductImgImg/chocolate-almendras.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 1,
      name:'Chocolate Suizo',
      description:'Crema helada de chocolate sabor toffee con dulce de leche repostero.',
      photo: 'chocolate-suizo.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 2,
      name:'Dulce De Leche',
      description:'Crema helada de dulce de leche.',
      photo: 'dulce-de-leche-es.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 2,
      name:'Dulce De Leche Granizado',
      description:'Crema helada de dulce de leche con granizado de chocolate semiamargo',
      photo: 'dulce-de-leche-granizado.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 2,
      name:'Dulce De Leche Con Nuez',
      description:'Crema helada de dulce de leche con nueces partidas.',
      photo: 'dulce-de-leche-nuez.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 2,
      name:'Dulce De Leche Tentacion',
      description:'Crema helada sabor a dulce de leche con agregado extra de dulce de leche.',
      photo: 'dulce-de-leche-tentacion.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 3,
      name:'Crema Americana',
      description:'Helado de Crema Americana.',
      photo: 'crema-americana.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },{
      
      flavorCategoryId: 3,
      name:'Granizado',
      description:'Crema helada sabor chantilly con granizado de chocolate semiamargo.',
      photo: 'granizado.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 3,
      name:'Vainilla',
      description:'Crema helada de vainilla.',
      photo: 'vainilla.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 3,
      name:'Crema Rusa',
      description:'Crema helada de nueces con nueces partidas.',
      photo: 'crema-rusa.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 3,
      name:'Cielo',
      description:'Crema helada con esencia de vainilla y menta',
      photo: 'crema-cielo.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 3,
      name:'Almendrado',
      description:'Crema helada con almendras fileteadas',
      photo: 'almendrado.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 3,
      name:'Sambayón',
      description:'Crema helada a base de yema de huevo y vinos marsala y mistela.',
      photo: 'sambayon.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 4,
      name:'Limón',
      description:'Helado de limón al agua con jugo de limón',
      photo: 'limon.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 4,
      name:'Frutilla',
      description:'Helado de agua de frutilla con trocitos de frutillas.',
      photo: 'frutilla.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 4,
      name:'Naranja',
      description:'Helado de naranja con jugo de naranja.',
      photo: 'naranja.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 4,
      name:'Mandarina',
      description:'Helado de mandarina con jugo de mandarina.',
      photo: 'mandarina.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 5,
      name:'Chocolate Vegano',
      description:'Chocolate 80%',
      photo: 'chocolate-vegano.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 5,
      name:'Ananá',
      description:'Helado de ananá al agua con jugo de ananá',
      photo: 'anana.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 6,
      name:'Menta Granizada',
      description:'Crema helada sabor menta con granizado de chocolate semiamargo.',
      photo: 'menta-granizada.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 6,
      name:'Tiramisú',
      description:'Crema helada de sabor tiramisú con bizcochuelo de vainilla.',
      photo: 'tiramisu.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 6,
      name:'Mascarpone',
      description:'Crema helada sabor mascarpone con pulpa de arándanos, frambuesa y frutilla.',
      photo: 'mascarpone.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 6,
      name:'Pistacho',
      description:'Crema helada sabor pistacho con pistachos filetados',
      photo: 'pistacho.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 6,
      name:'Oreo',
      description:'Crema helada sabor chantilly con galletas Oreo',
      photo: 'oreo.jpg',
      status:true,
      createdAt: new Date(),
      updatedAt: new Date()
  },
  {
      
      flavorCategoryId: 6,
      name:'Tramontana',
      description:'Crema helada sabor chantilly con dulce de leche y micro galletas bañadas en chocolate.',
      photo: 'tramontana.jpg',
      status:true,
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
