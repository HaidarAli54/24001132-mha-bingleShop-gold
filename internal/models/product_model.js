
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
    field: 'user_id'
  },
  name_product: {
    type: DataTypes.STRING,
    allowNull: true
  },
  category: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: 'category_id'
  },
  price: {
    type: DataTypes.DOUBLE,
    allowNull: true
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

    
  
module.exports = product