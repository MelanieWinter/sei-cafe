require('dotenv').config();
require('./config/database');

const Category = require('./models/category');
const Item = require('./models/item');

// IIFE
// Immediately Invoked Function Expression
(async function() {
  await Category.deleteMany({});
  const categories = await Category.create([
    {name: 'Sandwiches', sortOrder: 10},
    {name: 'Seafood', sortOrder: 20},
    {name: 'Mexican', sortOrder: 30},
    {name: 'Italian', sortOrder: 40},
    {name: 'Sides', sortOrder: 50},
    {name: 'Desserts', sortOrder: 60},
    {name: 'Drinks', sortOrder: 70},
  ]);

  await Item.deleteMany({});
  const items = await Item.create([
    {name: 'Hamburger', emoji: '🍔', category: categories[0], price: 595},
    {name: 'Turkey Sandwich', emoji: '🥪', category: categories[0], price: 6.95},
    {name: 'Hot Dog', emoji: '🌭', category: categories[0], price: 395},
    {name: 'Crab Plate', emoji: '🦀', category: categories[1], price: 1495},
    {name: 'Fried Shrimp', emoji: '🍤', category: categories[1], price: 1395},
    {name: 'Whole Lobster', emoji: '🦞', category: categories[1], price: 2595},
    {name: 'Taco', emoji: '🌮', category: categories[2], price: 195},
    {name: 'Burrito', emoji: '🌯', category: categories[2], price: 495},
    {name: 'Pizza Slice', emoji: '🍕', category: categories[3], price: 395},
    {name: 'Spaghetti', emoji: '🍝', category: categories[3], price: 795},
    {name: 'Garlic Bread', emoji: '🍞', category: categories[3], price: 195},
    {name: 'French Fries', emoji: '🍟', category: categories[4], price: 295},
    {name: 'Green Salad', emoji: '🥗', category: categories[4], price: 395},
    {name: 'Ice Cream', emoji: '🍨', category: categories[5], price: 195},
    {name: 'Cup Cake', emoji: '🧁', category: categories[5], price: 95},
    {name: 'Custard', emoji: '🍮', category: categories[5], price: 295},
    {name: 'Strawberry Shortcake', emoji: '🍰', category: categories[5], price: 395},
    {name: 'Milk', emoji: '🥛', category: categories[6], price: 95},
    {name: 'Coffee', emoji: '☕', category: categories[6], price: 95},
    {name: 'Mai Tai', emoji: '🍹', category: categories[6], price: 895},
    {name: 'Beer', emoji: '🍺', category: categories[6], price: 395},
    {name: 'Wine', emoji: '🍷', category: categories[6], price: 795},
  ]);

  console.log(items)

  process.exit();

})();
