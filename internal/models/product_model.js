
const { DataTypes } = require("sequelize")
const sequelize = require("../../pkg/db")

const Product = sequelize.define('product', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }, 
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'id_user'
  },
  name: {
    type: DataTypes.STRING,
    allowNull: true
  },
  description: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: true
  },
  category: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: true
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

    
  
module.exports = Product