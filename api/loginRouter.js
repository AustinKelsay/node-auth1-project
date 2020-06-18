const express = require('express');
const router = express.Router();
const Users = require("../data/users-schema")
const bcrypt = require('bcrypt');


router.post("/", (req, res) => {
  let {username, password} = req.body;

  Users.findByUsername(username)
    .then(user => {
      console.log(user);
      if (user && bcrypt.compareSync(password, user.password)) {
          req.session.user = user;
          res.status(201).json(user);
        }  
      else res.status(401).json({message: "Invalid credentials"});
    })
    .catch(err => {
      res.status(500).json({ error: "server error", err });
    });
});

module.exports = router;