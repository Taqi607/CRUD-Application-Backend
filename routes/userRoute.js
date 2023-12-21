const express = require("express");
const route = express.Router();
const {
  create,
  getAll,
  getOne,
  update,
  deleteUSer,
} = require("../controller/userController");

route.post("/create", create);
route.get("/getAll", getAll);
route.get("/getOne/:id", getOne);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUSer);

module.exports = route;
