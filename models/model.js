const { Product, Category, Factory } = require("./class");
const pool = require("../connection");

class Model {
  static readAllProducts(cb) {
    let query = `SELECT p.id, p.name, pc.name AS Category, p.stock, p.price, p.productDate
    FROM products p
    INNER JOIN "productCategories" pc ON p.category_id = pc.id;`;
    pool.query(query, (err, res) => {
      if (err) cb(err);
      else {
        let result = Factory.createBulkProductPerCategory(res.rows);
        cb(null, result);
      }
    });
  }

  static query2(cb) {
    let query = `SELECT p.id, p."name" , pc."name" AS Category , p.stock, p.price , p.productdate FROM products p 
    JOIN "productCategories" pc ON pc.id = p.category_id 
    WHERE p.stock = (SELECT max(stock) FROM products p);`;
    pool.query(query, (err, res) => {
      if (err) cb(err);
      else {
        let result = Factory.createBulkProductPerCategory(res.rows);
        cb(null, result);
      }
    });
  }

  static query3(cb) {
    let query = `SELECT
  p.id,
  p.name,
  pc.name AS Category,
  p.stock,
  p.price,
  p.productDate
  FROM
    products p
  INNER JOIN "productCategories" pc ON
    p.category_id = pc.id
  WHERE
    p.name ILIKE 'minyak%';`;

    pool.query(query, (err, res) => {
      if (err) cb(err);
      else {
        let result = Factory.createBulkProductPerCategory(res.rows);
        cb(null, result);
      }
    });
  }

  // FIXME: Query masih salah
  static query4(cb) {
    let query4 = `SELECT p.id, p."name" , pc."name" AS Category , p.stock, p.price , p.productdate FROM products p 
    JOIN "productCategories" pc ON pc.id = p.category_id
    WHERE productdate BETWEEN '2021-02-02' AND '2021-02-09'
    ORDER BY p.stock DESC
    LIMIT 3;`;

    pool.query(query4, (err, res) => {
      if (err) cb(err);
      else {
        let result = Factory.createBulkProductPerCategory(res.rows);
        // console.log(res.rows);
        cb(null, result);
      }
    });
  }

  static query5(cb) {
    let query5 = `    
    SELECT p.id,
    p."name",
    pc.name AS category,
    p.stock,
    p.price,
    p.productDate,
    p.stock * p.price AS sales
    FROM products p
    JOIN "productCategories" pc ON p.category_id = pc.id
    WHERE p.stock * p.price > 1000000
    GROUP BY p.id, p."name", pc.name, p.price, p.productdate
    ORDER BY sales DESC
    LIMIT 3;
    `;

    pool.query(query5, (err, res) => {
      if (err) cb(err);
      else {
        let data = res.rows.map((e) => {
          let PerProduk = new Product(
            e.id,
            e.name,
            e.category,
            e.stock,
            e.price,
            e.productdate
          );
          PerProduk.sales = e.sales * 1;
          return PerProduk;
        });
        cb(null, data);
      }
    });
  }
}

module.exports = Model;
