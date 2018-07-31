module.exports = function (sequelize, DataTypes) {
  var Phonebook = sequelize.define('Phonebook', {
      id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true,
          allowNull: false
      },
      contact_name: {
          type: DataTypes.STRING,
          allowNull: false,
      },
      devoured: {
          type: DataTypes.BOOLEAN,
          defaultValue: 0
      }
  });
  return Phonebook;
};