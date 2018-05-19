/**
 * Route
 * routing your controller
 * 
 * @param {Object} app: express instance
 * @param {Object} path: path instance
 * @param {Helper} flagHelper: flag helper
 */
module.exports = function onInit(app, path, flagHelper) {
  flagHelper.yellow('Pending', 'route ...');
  
  app.use('/', require('../controllers/welcome_controller.js'));

  flagHelper.green('Success', 'route');
}