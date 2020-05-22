const scene = require( './scene' );

module.exports.setRoutes = app => {

  app.get( '/api/scene/:name', scene.getSceneConfig );

};
