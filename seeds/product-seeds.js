const { Product } = require("../models");

const productData = [
  {
    product_name: "Product 1",
    price: 9.99,
    stock: 14,
    category_id: 1,
  },
  {
    product_name: "Product 2",
    price: 19.99,
    stock: 25,
    category_id: 2,
  },
  // More products...
  {
    product_name: "Product 3",
    price: 14.99,
    stock: 10,
    category_id: 3,
  },
  {
    product_name: "Product 4",
    price: 29.99,
    stock: 5,
    category_id: 4,
  },
  {
    product_name: "Product 5",
    price: 39.99,
    stock: 8,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
