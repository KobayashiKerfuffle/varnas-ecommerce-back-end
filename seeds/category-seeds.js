const { Category } = require('../models');

const categoryData = [
    {
        category_name: 'Electronics',
    },
    {
        category_name: 'Clothing',
    },
    {
        category_name: 'Home & Garden',
    },
    {
        category_name: 'Books',
    },
    {
        category_name: 'Toys & Games',
    },
    // Add more categories as needed
];

const seedCategories = async () => {
    await Category.bulkCreate(categoryData);
};

module.exports = seedCategories;
