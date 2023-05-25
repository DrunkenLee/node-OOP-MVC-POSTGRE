class Product {
  constructor(id, name, category, stock, price, productdate) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.stock = stock;
    this.price = price;
    this.productdate = productdate;
  }
}

class Category {
  constructor(id, name) {
    this.id = id;
    this.name = name;
  }
}

class Factory {
  static createProduk(id, name, category, stock, price, productdate) {
    return new Product(id, name, category, stock * 1, price * 1, productdate);
  }

  static createCategory(name) {
    return new Category(name);
  }

  static createBulkProductPerCategory(data) {
    return data.map((e) => {
      let newCat = new Category(null, e.category);
      return this.createProduk(
        e.id,
        e.name,
        newCat,
        e.stock,
        e.price,
        e.productdate
      );
    });
  }
}

module.exports = { Product, Category, Factory };
