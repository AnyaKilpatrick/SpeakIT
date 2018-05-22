

module.exports = function(sequelize, DataTypes) {
    var Connection = sequelize.define("Connection", {
      requestee: {
        //obtain this from the div where the user is displayed
        type: DataTypes.STRING,
        allowNull: false,
      },
      requesteeLang: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      requestor: {
        type: DataTypes.STRING,
        allowNull: false,
      }
    });
  
    return Connection;
  };