

module.exports = function(sequelize, DataTypes) {
    var Connection = sequelize.define("Connection", {
    //   requestor: {
    //     //obtain this from the user who is logged in
    //     type: DataTypes.INTEGER,
    //     allowNull: false
        
    //   },
      requestee: {
        //obtain this from the div where the user is displayed
        type: DataTypes.INTEGER,
        allowNull: false,
      }
    });
  
    Connection.associate = function(models) {
      Connection.belongsTo(models.User, {
        foreignKey: {
          allowNull: false
        }
      });
    };
  
    return Connection;
  };