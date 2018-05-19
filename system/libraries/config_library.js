/**
 * Configuration 
 * initialize config
 * 
 * @return {Helper} flagHelper: flag helper
 */
const express = require('express');
const path = require('path');

const configDatabase = require('../../application/config/database.js');
const customInit = require('../../application/config/custom-init.js');

module.exports = function onInit(config, flagHelper) {
  const app = express();

  flagHelper.yellow('Pending', 'config');

  // your custom init ( exports.init[0] inside application/config/custom-init.js )
  customInit.init[0] (app);
  
  // initialize database
  if (configDatabase.dbIsUse) {
    const database = require('../database/driver.js');

    database.initDatabase(
      app, 
      configDatabase.dbDriver, 
      configDatabase.dbHost, 
      configDatabase.dbUsername, 
      configDatabase.dbPassword, 
      configDatabase.dbDatabase
    );
    flagHelper.blue('Info', 'database: enabled');
    flagHelper.blue('Info', 'database driver: ' + configDatabase.dbDriver);
  }

  // your custom init ( exports.init[1] inside application/config/custom-init.js )
  customInit.init[1] (app);

  app.use(
    express.static(
      path.join(__dirname, '../../' + config.staticDir)
    )
  );
  flagHelper.blue('Info', 'express static: ' + path.join(__dirname, '../../' + config.staticDir));

  // your custom init ( exports.init[2] inside application/config/custom-init.js )
  customInit.init[2] (app);

  if (config.sessionIsUse) {
    const session = require('express-session');
    app.use(session(config.session));

    flagHelper.blue('Info', 'session: enabled');
  }

  // your custom init ( exports.init[3] inside application/config/custom-init.js )
  customInit.init[3] (app);

  if (config.expressParserIsUse) {
    app.use(express.json());
    app.use(express.urlencoded(config.expressParser));

    flagHelper.blue('Info', 'express-parser: enabled');
  }

  customInit.init[4] (app);

  flagHelper.green('Success', 'config');

  const renderLibrary = require('./render_library.js') (app, config, flagHelper);
  const route = require('../../application/routes/route.js') (app, path, flagHelper);

  return app;
}