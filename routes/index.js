var express = require("express");
var router = express.Router();
const menuModel = require("../model/menu");

/* GET home page. */
router.get("/", async function (req, res, next) {
  let menuItems = await menuModel.getItems();
  if (!menuItems.status) {
    menuItems.data = [];
  }

  menuItems.name = "main";

  res.render("index", { title: "Express", menu: menuItems });
});

module.exports = router;
