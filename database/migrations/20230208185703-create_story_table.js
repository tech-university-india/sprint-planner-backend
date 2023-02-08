/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // table name: story
    await queryInterface.createTable('story', {
      id: {
        type: Sequelize.UUID,
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      storyPoints: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      //   developerId: {
      //     type: Sequelize.INTEGER,
      //     allowNull: true,
      //   },
      projectId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'project',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('story');
  },
};
