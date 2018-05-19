/**
 * Configuration 
 * user config setting
*/

/**
 * Port
 * default: 8080
 */
exports.port = 8080;

/**
 * Application stage
 * development, production
 * 
 * default: development
 */
process.env.NODE_ENV = 'development';

/**
 * static directory
 * default: assets
*/
exports.staticDir = 'assets';

/**
 * session config
 * 
 * 
 * @param {String} secret: session secret key
 * default: empty
 * 
 * @param {Number} cookie.maxAge: max session age (milliseconds)
 * default: (1 hour) = 3600000
 * 
 * for more details: github @expressjs/session
*/
// sessionIsUse: enable or disable session system
exports.sessionIsUse = false;

exports.session = {
  secret: '',
  cookie: {
    maxAge: 3600000
  },
  resave: false,
  saveUninitialized: true
};

/**
 * ExpressParser config
 * Codeigniter.js uses built-in parser instead of body-parser
 * It's still the same as body-parser
 * 
 * for more details: github @expressjs/body-parser
 */
// bodyParserIsUse: enable or disable body-parser
exports.expressParserIsUse = false;

exports.expressParser = {
  extended: false
};

/**
 * Render engine
 * Codeigniter.js uses Consolidate for managing view rendering
 * 
 * @param {Boolean} renderEngineIsUse: enable or disable views system
 * default: true (If you want to make an API application, set it false)
 *
 * 
 * @param {String} renderEngine: set render engine
 * default: 'handlebars'
 * 
 * Lists of available engine
 * 
 * 'atpl', 'dot', 'dust', 'eco', 'ect', 'ejs', 'haml', 'hamlet',
 * 'handlebars', 'hogan', 'htmling', 'jade', 'jazz', 'jqtpl',
 * 'JUST', 'liquor', 'lodash', 'mote', 'mustache', 'nunjucks',
 * 'pug', 'QEJS', 'ractive', 'react', 'swig', 'templayed',
 *  'liquid', 'toffee', 'underscore', 'walrus', 'whiskers'
 * 
 * ***** you MUST INSTALL npm package of your desired view engine BEFORE use
 * Codeigniter.js has already installed 'handlebars' and 'jade' view engine
 */
exports.renderEngineIsUse = true;
exports.renderEngine = 'handlebars';

/**
 * use .html for view engine 
 * 
 * don't forget to change the extension to your desired view engine
 * for example Jade engine use .jade as extension, so you have to set renderExtension to 'jade'
*/
exports.renderExtension = 'html';


