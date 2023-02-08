/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // table name: project_developer_junction
    await queryInterface.createTable('project_developer_junction', {
      projectId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'project',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      developerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'developer',
          key: 'fmno',
        },
        onDelete: 'CASCADE',
      },
      developerCapacity: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('project_developer_junction');
  },
};
