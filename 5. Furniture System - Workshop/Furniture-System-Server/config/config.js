module.exports = {
  development: {
    port: process.env.PORT || 9999,
    dbPath: 'mongodb://localhost:27017/furniture-system'
  },
  production: {}
};