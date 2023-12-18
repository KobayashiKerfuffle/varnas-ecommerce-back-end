const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Category extends Model {}

Category.init(
    {
        // Define attributes (columns) for the Category model
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        category_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        // Additional model options
        sequelize, // Pass the connection instance
        timestamps: false, // Do not automatically create createdAt/updatedAt timestamp fields
        freezeTableName: true, // Prevent sequelize from renaming the table
        underscored: true, // Use underscores instead of camel-casing
        modelName: 'category', // Define the model name
    }
);

module.exports = Category;
