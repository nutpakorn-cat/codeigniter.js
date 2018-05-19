const flagHelper = require('./system/helpers/flag_helper.js');

const config = require('./application/config/config.js');
const app = require('./system/libraries/config_library.js') (config, flagHelper);

const server = app.listen(config.port, () => {
  if (process.env.NODE_ENV === 'production') {
    flagHelper.magenta('PRODUCTION', 'Your application is running under PRODUCTION stage.');
  }

  flagHelper.green('Ready', 'Everything is done right now! Server is started at ' + config.port);
});

module.exports = app;