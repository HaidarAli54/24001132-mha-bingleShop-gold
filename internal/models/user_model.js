
const { DataTypes } = require('sequelize');
const sequelize = require("../../pkg/db")

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  full_name: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true
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
  timestamps: true,
  paranoid: true,
  underscored: true,
  deletedAt: 'deleted_at',
  updatedAt: 'updated_at',
  createdAt: 'created_at',
})

module.exports = User