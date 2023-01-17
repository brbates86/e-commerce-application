const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'Alt Rock',
  },
  {
    tag_name: 'Action',
  },
  {
    tag_name: 'Comedy',
  },
  {
    tag_name: 'Blue',
  },
  {
    tag_name: 'Green',
  },
  {
    tag_name: 'Silver',
  },
  {
    tag_name: 'Pop Culture',
  },
  {
    tag_name: 'Rock Music',
  },
  {
    tag_name: 'Yellow',
  },
];

const seedTags = () => Tag.bulkCreate(tagData); 
module.exports = seedTags;