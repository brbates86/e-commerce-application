const { Product } = require('../models');

const productData = [
  {
    product_name: 'Blu-Ray Player',
    price: 100.00,
    stock: 50,
    category_id: 1,
  },
  {
    product_name: 'Rocking Chair',
    price: 250.00,
    stock: 15,
    category_id: 2,
  },
  {
    product_name: 'T-Shirt',
    price: 12.99,
    stock: 25,
    category_id: 3,
  },
  {
    product_name: 'Lawn Mower',
    price: 600.99,
    stock: 10,
    category_id: 4,
  },
  {
    product_name: 'Compact Disc',
    price: 12.99,
    stock: 150,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;