'use strict';
module.exports = function(sequelize, DataTypes) {
  var Transaction = sequelize.define('Transaction', {
    amount: DataTypes.INTEGER,
    keterangan: DataTypes.STRING,
    tanggal_transaksi: DataTypes.DATE,
    id_category: DataTypes.INTEGER,
    id_user : DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        Transaction.belongsTo(models.User, {foreignKey:'id_user'})
        Transaction.belongsTo(models.Category, {foreignKey:'id_category'})
      }
    }
  });
  return Transaction;
};
