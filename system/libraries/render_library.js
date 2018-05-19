/**
 * Render library
 * provide Consolidate instance
 * 
 * @param {Object} app 
 * @param {Object} config 
 * @param {Helper} flagHelper 
 */
const cons = require('consolidate');

const consolidateList = {
  'atpl': cons.atpl,
  'dot': cons.dot,
  'dust': cons.dust,
  'eco': cons.eco,
  'ect': cons.ect,
  'ejs': cons.ejs,
  'haml': cons.haml,
  'hamlet': cons.hamlet,
  'handlebars': cons.handlebars,
  'hogan': cons.hogan,
  'htmling': cons.htmling,
  'jade': cons.jade,
  'jazz': cons.jazz,
  'jqtpl': cons.jqtpl,
  'JUST': cons.just,
  'liquor': cons.liquor,
  'lodash': cons.lodash,
  'mote': cons.mote,
  'mustache': cons.mustache,
  'nunjucks': cons.nunjucks,
  'pug': cons.pug,
  'QEJS': cons.qejs,
  'ractive': cons.ractive,
  'react': cons.react,
  'swig': cons.swig,
  'templayed': cons.templayed,
  'liquid': cons.liquid,
  'toffee': cons.toffee,
  'underscore': cons.underscore,
  'walrus': cons.walrus,
  'whiskers': cons.whiskers
};

module.exports = function onRenderEngineInit(app, config, flagHelper) {
  flagHelper.yellow('Pending', 'set view engine');

  if (config.renderEngineIsUse) {
    app.engine(config.renderExtension, consolidateList[config.renderEngine]);

    app.set('view engine', config.renderExtension);
    app.set('views', __dirname + '/../../application/views');

    flagHelper.blue('Info', 'view engine: ' + config.renderEngine);
    flagHelper.blue('Info', 'view extension: .' + config.renderExtension);
  } else {
    flagHelper.blue('Info', 'view engine: disabled');
  }

  flagHelper.green('Success', 'set view engine');
}