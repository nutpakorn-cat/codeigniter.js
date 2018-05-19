/**
 * Driver
 * provide database driver
 * 
 * @param {Object} app: express instance
 * @param {String} dbDriver: driver type
 * @param {String} dbHost: host name
 * @param {String} dbUsername: username
 * @param {String} dbPassword: password
 * @param {String} dbDatabase: database name
 * 
 * @return {void}
 */
exports.initDatabase = function provideDatabase(app, dbDriver, dbHost, dbUsername, dbPassword, dbDatabase) {
  if (dbDriver === 'mongodb') {
    const expressMongoDb = require('express-mongo-db');
    const dbString = 'mongod://' + dbUsername + ':' + dbPassword + '@' + dbHost + '/' + dbDatabase;

    app.use(expressMongoDb(dbString));
  }
}