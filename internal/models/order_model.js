

const { DataTypes } = require("sequelize")
const sequelize = require("../../pkg/db")

const Order = sequelize.define('order', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  }, 
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_user'
  },
  id_product: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: 'id_product'
  },
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  order_date: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  total_price: {
    type: DataTypes.DOUBLE,
    allowNull: false,
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



module.exports = Order