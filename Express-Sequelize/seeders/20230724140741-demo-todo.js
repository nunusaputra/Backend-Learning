'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Todos', [{
      title: "todo 1",
      description: "learn sequelize init",
      startTime: new Date(),
      status: "false",
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      title: "todo 2",
      description: "learn sequelize generate model and seeding",
      startTime: new Date(),
      status: "false",
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Todos', null, {})
  }
};
