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
        name: "Wisnu Saputra",
        username: "nunu's_17",
        email: "nunusaputra17@gmail.com",
        password: "wisnu123",
        address: "Jl. Bojong Karya",
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        name: "Bambang Poltak",
        username: "bamss",
        email: "popol@gmail.com",
        password: "popol123",
        address: "Jl. Simprug Golf",
        createdAt: new Date(),
        updatedAt: new Date()
   },
    {
        name: "Jamal Mukidi",
        username: "jajam_tutu17",
        email: "jamsmuk123@gmail.com",
        password: "jajam123",
        address: "Jl. Bojong Soang",
        createdAt: new Date(),
        updatedAt: new Date()
   },
  
  ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  }
};
