//still need to update the .hasMany in user.js to make this work correctly

module.exports = function(sequelize, DataTypes) {
    var Connection = sequelize.define("Connection", {
      requestor: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [5, 15]
        }
      },
      requestee: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [5, 15]
          }
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