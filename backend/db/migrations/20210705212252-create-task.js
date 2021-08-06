'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Tasks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      description: {
        allowNull: false,
        type: Sequelize.STRING(255),
      },
      isComplete: {
        allowNull: false,
        type: Sequelize.BOOLEAN,
      },
      position: {
        type: Sequelize.INTEGER,
      },
      keepId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Keeps' },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Tasks');
  },
};
