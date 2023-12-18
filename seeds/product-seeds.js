const { Product } = require('../models');

const productData = [
    {
        product_name: 'Wireless Mouse',
        price: 29.99,
        stock: 15,
        category_id: 1, // Assuming '1' is the ID of a relevant category like 'Electronics'
    },
    {
        product_name: 'Graphic T-Shirt',
        price: 19.99,
        stock: 25,
        category_id: 2, // Assuming '2' is the ID of a relevant category like 'Clothing'
    },
    {
        product_name: 'Gardening Shovel',
        price: 14.99,
        stock: 10,
        category_id: 3, // Assuming '3' is the ID of a relevant category like 'Home & Garden'
    },
    {
        product_name: 'Novel - Science Fiction',
        price: 12.99,
        stock: 8,
        category_id: 4, // Assuming '4' is the ID of a relevant category like 'Books'
    },
    {
        product_name: 'Board Game',
        price: 34.99,
        stock: 5,
        category_id: 5, // Assuming '5' is the ID of a relevant category like 'Toys & Games'
    },
    // Add more products as needed
];

const seedProducts = async () => {
    await Product.bulkCreate(productData);
};

module.exports = seedProducts;
