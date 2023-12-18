const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class ProductTag extends Model {}

ProductTag.init(
    {
        // Define attributes (columns) for the ProductTag model
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        product_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'product', // References the 'product' model
                key: 'id', // The column that it references
            },
        },
        tag_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'tag', // References the 'tag' model
                key: 'id', // The column that it references
            },
        },
    },
    {
        // Additional model options
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'productTag',
    }
);

module.exports = ProductTag;
