/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // table name: story
    await queryInterface.createTable('story', {
      id: {
        type: Sequelize.STRING, // input from frontend
        primaryKey: true,
        allowNull: false,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: true,
      },
      storyPoints: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      //   developerId: {
      //     type: Sequelize.INTEGER,
      //     allowNull: true,
      //   }, -> will be calculated
      projectId: {
        type: Sequelize.UUID,
        allowNull: false,
        references: {
          model: 'project',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('story');
  },
};
