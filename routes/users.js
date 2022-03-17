const express = require("express");
const router = express.Router();
const userModel = require("../model/user");
const menuModel = require('../model/menu')


/* GET users listing. */
router.get('/create', async (req, res) => {
  let menuItems = await menuModel.getItems();
  let page = { data: { title: "Create Account" } };
  res.render("create_account", {menu:menuItems, page:page});
});

router.post('/create', async (req, res) => {
  let menuItems = await menuModel.getItems();
  let page = { data: { title: "Account Created" } };

  let result = {
    status: false,
    user: null,
    message: "unable to create account"
  }

  if (req.body.function === 'create') {
    result = await userModel.addUser(req.body);
    console.log(result);
  }
  //console.log(req.body);
  res.render("account_created", {menu:menuItems, page:page, result:result});
});


// router.get('/login', async (req, res) => {
  
//   res.send("login form");
// });




// router.get("/", async (req, res, next) => {
//   let result = await userModel.getUsers();
//   console.log(result);
//   res.render("users", { title: "Users", users: result });
// });



// router.get("/:userId", async (req, res, next) => {
//   let userId = parseInt(req.params.userId.trim());
//   let result = await userModel.getUser(userId);
//   console.log(result);
//   res.send(result);
// });

module.exports = router;
