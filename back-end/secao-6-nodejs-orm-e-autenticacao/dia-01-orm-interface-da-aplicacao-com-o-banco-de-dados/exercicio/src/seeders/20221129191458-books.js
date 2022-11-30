'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
   await queryInterface.bulkInsert('Books', 
  [
    {
      title: 'Pequeno Príncipe',
      author: 'Julia Rorona', 
      pageQuantity: 203,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'Leis da Física',
      author: 'Bruna Neponuceno', 
      pageQuantity: 348,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'Senhor dos Desejos',
      author: 'Stanoviski Labirizoi', 
      pageQuantity: 120,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'Diário de um artista em guerra',
      author: 'Vladimir Coral', 
      pageQuantity: 290,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'Sexto Sentido',
      author: 'Maria Karla', 
      pageQuantity: 130,
      createdAt: Sequelize.literal('CURRENT_TIMESTAMP'),
      updatedAt: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
  ]);
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('books', null, {});
  }
};
