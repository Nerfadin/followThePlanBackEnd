'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'users',
      'role', {
      allowNull: false,
      type: Sequelize.STRING,
    }) 
  
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn ('users', 'role', )
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
