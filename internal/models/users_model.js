

const { DataTypes } = require('sequelize');
const sequelize = require("../../pkg/db")

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  fullName: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false
  },
},{

  sequelize: sequelize,
  timestamps: false
})

module.exports = User