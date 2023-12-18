const { ProductTag } = require('../models');

const productTagData = [
    {
        product_id: 1, // Assuming '1' is the ID of a relevant product
        tag_id: 1, // Assuming '1' is the ID of a relevant tag
    },
    {
        product_id: 1,
        tag_id: 2,
    },
    {
        product_id: 2,
        tag_id: 3,
    },
    {
        product_id: 3,
        tag_id: 4,
    },
    {
        product_id: 4,
        tag_id: 5,
    },
    // Add more product-tag associations as needed
];

const seedProductTags = async () => {
    await ProductTag.bulkCreate(productTagData);
};

module.exports = seedProductTags;
