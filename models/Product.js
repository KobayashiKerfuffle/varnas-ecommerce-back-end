const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Product extends Model {}

Product.init(
    {
        // Define attributes (columns) for the Product model
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        product_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                isDecimal: true, // Validates that the value is a decimal
            },
        },
        stock: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 10, // Sets a default value
            validate: {
                isNumeric: true, // Validates that the value is numeric
            },
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category', // References the 'category' model
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
        modelName: 'product',
    }
);

module.exports = Product;
