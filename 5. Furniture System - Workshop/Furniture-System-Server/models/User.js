const mongoose = require('mongoose');
const encryption = require('../util/encryption');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: Schema.Types.String,
    required: true,
    unique: true
  },
  name: {
    type: Schema.Types.String,
    required: true
  },
  hashedPass: {
    type: Schema.Types.String,
    required: true
  },
  salt: {
    type: Schema.Types.String,
    required: true
  },
  roles: [{
    type: Schema.Types.String
  }]
});

userSchema.method({
  authenticate: function (password) {
    return encryption.generateHashedPassword(this.salt, password) === this.hashedPass;
  }
});

const User = mongoose.model('User', userSchema);

User.seedAdminUser = async () => {
  try {
    let users = await User.find();

    if (users.length > 0) return;

    const salt = encryption.generateSalt();
    const hashedPass = encryption.generateHashedPassword(salt, 'Admin');

    return User.create({
      name: 'Admin',
      email: 'admin@admin.com',
      salt,
      hashedPass,
      roles: ['Admin']
    });
  } catch (e) {
    console.log(e);
  }
};

module.exports = User;