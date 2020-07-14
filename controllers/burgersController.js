let express = require("express");
let router = express.Router();
let burger = require("../models/burger.js");

router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    let allBurgers = {
      burgers: data
    };
    res.render("index", allBurgers);
  });
});

router.post("/api/burgers", function(req, res) {
  burger.insertOne([
    "name", "devoured"
  ], [
    req.body.name, req.body.devoured
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(req, res) {
  let condition = "id = " + req.params.id;
  burger.updateOne({
    devoured: req.body.devoured
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


module.exports = router;
