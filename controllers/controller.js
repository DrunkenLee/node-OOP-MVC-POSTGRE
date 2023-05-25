const View = require("../views/view");
const Model = require("../models/model");

class Controller {
  static readAllProducts() {
    Model.readAllProducts((err, res) => {
      if (err) View.showErr(err);
      else View.readAll(res);
    });
  }

  static query2() {
    Model.query2((err, res) => {
      if (err) View.showErr(err);
      else View.query2(res);
    });
  }

  static query3() {
    Model.query3((err, res) => {
      if (err) View.showErr(err);
      else View.query3(res);
    });
  }

  static query4() {
    Model.query4((err, res) => {
      if (err) View.showErr(err);
      else View.query4(res);
    });
  }

  static query5() {
    Model.query5((err, res) => {
      if (err) View.showErr(err);
      else View.query5(res);
    });
  }
}

module.exports = Controller;
