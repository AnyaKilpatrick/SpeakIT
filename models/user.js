var bcrypt = require("bcrypt-nodejs");
// var Sequelize = require("sequelize");
// var sequelize = require("./../config/config.json");

module.exports = function(sequelize, DataTypes) {
    var userSchema = sequelize.define("User", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true,
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
        gender: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: {
                isAlphanumeric: true, // will only allow alphanumeric characters, so "_abc" will fail
                notContains: " ", // don't allow empty space,
            }
        },
        age: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        language: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        about: {
            type: DataTypes.TEXT,
            allowNull: true,
            validate: {
                len: [10,200]
            }
        }
    })
    // // methods
    // // generating a hash
    // userSchema.generateHash = function(password){
    //     return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    // }
    // // checking if password is valid
    // userSchema.validPassword = function(password) {
    //     return bcrypt.compareSync(password, this.password);
    // };
    return userSchema;
}
