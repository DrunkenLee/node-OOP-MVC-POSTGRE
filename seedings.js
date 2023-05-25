const { Product, Category } = require("./models/class");
const fs = require("fs");
const pool = require("./connection.js");
const View = require("./views/view");

const rawProduct = JSON.parse(fs.readFileSync("data/product.json", "utf-8"));
const rawCategory = JSON.parse(fs.readFileSync("data/category.json", "utf-8"));

let CategoryData = rawCategory.map((e) => {
  return `('${e.category}')`;
});

let ProductData = rawProduct.map((e) => {
  return `('${e.name}' ,'${e.CategoryId}', '${e.stock}', '${e.price}', '${e.productDate}')`;
});

let createCategoryTable = `CREATE TABLE "productCategories" (
    id SERIAL PRIMARY KEY,
    name varchar NOT NULL
    );`;

let createProductTable = `CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    category_id INT REFERENCES "productCategories" ("id") NOT NULL,
    stock INT NOT NULL,
    price NUMERIC(10, 2) NOT NULL,
    productDate DATE NOT NULL
    );`;

let addCategoryQuery = `
INSERT INTO "productCategories" (name)
VALUES 
    ${CategoryData.join(",")};
    `;

let addProductQuery = `
INSERT INTO "products" (name, "category_id", stock, price, "productdate")
VALUES 
    ${ProductData.join(",")};
    `;

pool.query(createCategoryTable, (err, res) => {
  if (err) View.showErr(err);
  else {
    View.seeding(`Seeding Success for Create Category Table`);
    pool.query(createProductTable, (err, res) => {
      if (err) View.showErr(err);
      else {
        View.seeding(`Seeding Success for Create Product Table`);
      }
    });
  }
});

pool.query(addCategoryQuery, (err, res) => {
  if (err) View.showErr(err);
  else {
    View.seeding(`Seeding Success for insert data into product category`);
    pool.query(addProductQuery, (err, res) => {
      if (err) View.showErr(err);
      else {
        View.seeding(`Seeding Success for insert data into product`);
      }
    });
  }
});
