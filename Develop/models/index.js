// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
});

// Products belongToMany Tags (through ProductTag)
Product.belgonsToMany(Tag, {
  //Define the third table needed to store the foreign keys
  through: {
    model: ProductTag,
    unique: false //this can have many of the same tags//
  },
  //define an alias for when data is retrieved
  as: 'product_tag'
});

// Tags belongToMany Products (through ProductTag)
Tag.belgonsToMany(Product, {
  through: {
    model: ProductTag,
    unique: false
  },
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
