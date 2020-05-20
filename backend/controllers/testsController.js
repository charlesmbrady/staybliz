const db = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const cookieParser = require('cookie-parser'); // for the auth token
const moment = require('moment');

// Defining methods for the testsController
module.exports = {
  create: function (req, res) {
    const decoded = jwt.decode(req.cookies.token);
    const test = req.body;
    test.UserId = decoded.id;

    // const { name } = req.body;
    db.Test.create(test)
      .then((result) => {
        res.json(result);
      })
      .catch((err) => {
        res.json(err);
        console.log('ERROR: ' + err.errors[0].message);
      });
  },
  getById: function (req, res) {
    const decoded = jwt.decode(req.cookies.token);

    db.Test.findAll({
      where: {
        UserId: decoded.id,
      },
    }).then((dbTests, err) => {
      if (err) {
        res.status(500).send(err);
      }
      dbTests.filter((tests) => test.id == req.params.id);
      res.json(dbTests[0]);
    });
  },

  getAllByUserId: function (req, res) {
    const decoded = jwt.decode(req.cookies.token);

    db.Test.findAll({
      where: {
        UserId: decoded.id,
      },
    }).then((dbTests, err) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(dbTests);
    });
  },
  updateById: function (req, res) {
    const decoded = jwt.decode(req.cookies.token);

    db.Test.findAll({
      where: {
        UserId: decoded.id,
      },
    }).then((dbTests, err) => {
      if (err) {
        res.status(500).send(err);
      }
      dbTests.filter((test) => test.id == req.params.id);
      if (dbTests[0]) {
        db.Test.update(req.body, {
          where: {
            id: req.params.id,
          },
        })
          .then((newDbTest) => {
            if (newDbTest) {
              res.json(newDbTest);
            }
          })
          .catch((err) => res.json(err));
      }
    });
  },
};
