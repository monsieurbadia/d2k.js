const app = require( 'express' )();
const compression = require( 'compression' );
const cors = require( 'cors' )( { origin: true } );
const http = require( 'http' );
const routes = require( './routes/routes' );

const handler = ( request, response, next ) => cors( request, response, _ => app.handle( request, response, next ) );

app.use( cors );
app.use( compression() );

routes.setRoutes( app );

module.exports.app = http
  .createServer( handler )
  .listen( 5007 );
