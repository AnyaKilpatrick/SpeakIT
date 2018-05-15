// create a "User" model
module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [5,15]
            },
            notContains: " "
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isAlphanumeric: true, // will only allow alphanumeric characters, so "_abc" will fail
                notContains: " ", // don't allow empty space,
                len: [5,10]
            }
        },
        language: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type:DataTypes.STRING,
            allowNull:false,
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        about: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [10,200]
            }
        }
    });

    User.associate = function(models) {
        // Associating Author with Posts
        // When an Author is deleted, also delete any associated Posts
        User.hasMany(models.Connection, {
          onDelete: "cascade"
        });
    };
    return User;
}