const { DataTypes } = require("sequelize");
const sequelize = require("../config/pg");

const User = sequelize.define("User", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
});

module.exports = User;