var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'cake'
    },
    port: 3000,
    db: 'mongodb://localhost/blog'
  },

  test: {
    root: rootPath,
    app: {
      name: 'cake'
    },
    port: 3000,
    db: 'mongodb://localhost/cake-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'cake'
    },
    port: 3000,
    db: 'mongodb://localhost/cake-production'
  }
};

module.exports = config[env];
