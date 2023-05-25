const input = process.argv.splice(2);
const [command, ...param] = input;
const Controller = require("./controllers/controller");

switch (command) {
  case "help":
    console.log("your input :", param);
    break;
  case "query-1":
    Controller.readAllProducts();
    break;
  case "query-2":
    Controller.query2();
    break;
  case "query-3":
    Controller.query3();
    break;
  case "query-4":
    Controller.query4();
    break;
  case "query-5":
    Controller.query5();
    break;
  default:
    console.log("your input :", param);
    break;
}
