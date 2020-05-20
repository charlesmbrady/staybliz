const db = require('../models');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();
const cookieParser = require('cookie-parser'); // for the auth token
const moment = require('moment');

// Defining methods for the projectsController
module.exports = {
  create: function (req, res) {
    const decoded = jwt.decode(req.cookies.token);
    const project = req.body;
    project.UserId = decoded.id;

    // const { name } = req.body;
    db.Project.create(project)
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

    db.Project.findAll({
      where: {
        UserId: decoded.id,
      },
    }).then((dbProjects, err) => {
      if (err) {
        res.status(500).send(err);
      }
      dbProjects.filter((projects) => project.id == req.params.id);
      res.json(dbProjects[0]);
    });
  },
  getAllByUserId: function (req, res) {
    const decoded = jwt.decode(req.cookies.token);

    db.Projects.findAll({
      where: {
        UserId: decoded.id,
      },
    }).then((dbProjects, err) => {
      if (err) {
        res.status(500).send(err);
      }
      res.json(dbProjects);
    });
  },
  updateById: function (req, res) {
    const decoded = jwt.decode(req.cookies.token);

    db.Project.findAll({
      where: {
        UserId: decoded.id,
      },
    }).then((dbProjects, err) => {
      if (err) {
        res.status(500).send(err);
      }
      dbProjects.filter((project) => project.id == req.params.id);
      if (dbProjects[0]) {
        db.Project.update(req.body, {
          where: {
            id: req.params.id,
          },
        })
          .then((newDbProject) => {
            if (newDbProject) {
              res.json(newDbProject);
            }
          })
          .catch((err) => res.json(err));
      }
    });
  },
};
