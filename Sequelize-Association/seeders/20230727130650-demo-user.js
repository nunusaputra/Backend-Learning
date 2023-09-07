'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users', [
    {
      name: 'Wisnu Saputra',
      username: 'nunu17',
      email: 'nunusaputra17@gmail.com',
      password: 'wisnu123',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      name: 'Sumardji Sukiman',
      username: 'sumasuk88',
      email: 'sumasuk88@gmail.com',
      password: 'sumardji123',
      createdAt: new Date(),
      updatedAt: new Date(),
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {} )
  }
};
