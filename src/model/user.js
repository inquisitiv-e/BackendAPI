const db = require('../database/database');

const User = db.Model.extend({
  tableName: 'users',
  hasSecurePassword: true,
});

module.exports = User;