const express = require('express');
const router = express.Router();
const Users = require("../data/users-schema")
const restricted = require("../middleware/restricted-middleware");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then((users) => {
      res.json(users);
    })
    .catch((err) => res.send(err));
});

module.exports = router;