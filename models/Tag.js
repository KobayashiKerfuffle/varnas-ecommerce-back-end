const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class Tag extends Model {}

Tag.init(
    {
        // Define attributes (columns) for the Tag model
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        tag_name: {
            type: DataTypes.STRING,
        },
    },
    {
        // Additional model options
        sequelize, // Pass the connection instance
        timestamps: false, // Do not automatically create createdAt/updatedAt timestamp fields
        freezeTableName: true, // Prevent sequelize from renaming the table
        underscored: true, // Use underscores instead of camel-casing
        modelName: 'tag', // Define the model name
    }
);

module.exports = Tag;
