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
    await queryInterface.bulkInsert('Blogs', [
      {
        title: "Sakadang Peucang",
        genre: "Fabel",
        year: 2019,
        desc: "Kisah dongeng sunda tentang sakadang peucang",
        UserId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Malin Kundang",
        genre: "Dongeng",
        year: 2001,
        desc: "Kisah dongeng tentang anak yang durhaka kepada orang tua",
        UserId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: "Harry Potter",
        genre: "Sci-fi",
        year: 2010,
        desc: "Kisah petualangan seorang anak dalam sekolah penyihir",
        UserId: 1,
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
  }
};
