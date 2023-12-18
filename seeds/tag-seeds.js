const { Tag } = require('../models');

const tagData = [
    {
        tag_name: 'wireless',
    },
    {
        tag_name: 'water-resistant',
    },
    {
        tag_name: 'eco-friendly',
    },
    {
        tag_name: 'compact',
    },
    {
        tag_name: 'rustic',
    },
    // Add more tags as needed
];

const seedTags = async () => {
    await Tag.bulkCreate(tagData);
};

module.exports = seedTags;
