const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const User = require('../models/User');

module.exports = config => {
  mongoose.connect(config.dbPath, {
    useNewUrlParser: true
  });

  const db = mongoose.connection;

  db.once('open', error => {
    if (error) throw error;

    User
      .seedAdminUser()
      .then(() => {
        console.log('Database ready');
      })
      .catch((reason) => {
        console.log('Something went wrong');
        console.log(reason);
      });
  });

  db.on('error', reason => {
    console.log(reason);
  });
};