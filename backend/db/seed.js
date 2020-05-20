const db = require('../models');

module.exports = () => {
  db.User.create({
    firstName: 'Joe',
    lastName: 'Gates',
    email: 'j@g.co',
    password: process.env.ADMIN_USER_PWD,
    isAdmin: true,
  });
  db.User.create({
    firstName: 'The',
    lastName: 'GOAT',
    email: 'the.goat@theGOAT.com',
    // password: process.env.USER_PWD,
    password: 'mypassword1!',
    isAdmin: false,
  });
};
