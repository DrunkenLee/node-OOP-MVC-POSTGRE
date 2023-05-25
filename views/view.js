class View {
  static showErr(msg) {
    console.log(msg);
  }

  static seeding(msg) {
    console.log(msg);
  }

  static readAll(data) {
    let result = data.map((e) => {
      return {
        Name: e.name,
        Category: e.category.name,
        Stock: e.stock,
        Price: e.price,
        "Product Date": e.productdate,
      };
    });
    console.table(result);
  }

  static query2(data) {
    let result = data.map((e) => {
      return {
        Category: e.category.name,
        "Max Stock": e.stock,
      };
    });
    console.table(result);
  }

  static query3(data) {
    let result = data.map((e) => {
      return {
        Name: e.name,
        Category: e.category.name,
        Stock: e.stock,
        Price: e.price,
        "Product Date": e.productdate,
      };
    });
    console.table(result);
  }

  static query4(data) {
    let result = data.map((e) => {
      return {
        Name: e.name,
        Category: e.category.name,
        Stock: e.stock,
        Price: e.price,
        "Product Date": e.productdate,
      };
    });
    console.table(result);
  }

  // FIXME: Templating masih gajelas !
  static query5(data) {
    const tableData = data.map(({ category, sales }) => ({
      Category: category,
      Sales: sales,
    }));
    console.table(tableData);
  }
}

module.exports = View;
