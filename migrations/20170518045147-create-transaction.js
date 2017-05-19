'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Transactions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      amount: {
        allowNull : false,
        type: Sequelize.INTEGER
      },
      keterangan: {
        type: Sequelize.STRING
      },
      tanggal_transaksi: {
        allowNull : false,
        type: Sequelize.DATE
      },
      id_category: {
        allowNull : false,
        type: Sequelize.INTEGER
      },
      id_user:{
        allowNull : false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Transactions');
  }
};
