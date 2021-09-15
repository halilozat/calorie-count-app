module.exports = {
  up: async (queryInterface, Sequelize) => {

    return await queryInterface.bulkInsert(
      'Users',
      [
        {
          firstName: 'Halil',
          lastName: 'Ozat',
          email: 'hozat@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: 'Halil2',
          lastName: 'Ozat2',
          email: 'hozat2@gmail.com',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
