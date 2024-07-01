const { DataTypes } = require("sequelize")
const sequelize = require("../../pkg/db")

const Image = sequelize.define('image',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    id_product: {
        type: DataTypes.INTEGER,
        allowNull: false,
        field: 'id_product'
    },
    url: {
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

module.exports = Image