const bunyan = require( 'bunyan' );

const errorHandler = ( error, req, response, next ) => {

  if ( response.headersSent ) return next( error );

  log( error );

  response
    .status( 409 )
    .json( { error } )
    .end();

};

const log = ( id, type, value ) => {

  bunyan.createLogger( { name: id } );

  switch ( type ) {

    case 'info' :

      bunyan.info( value );
  
      break;

    case 'warn' :
  
      bunyan.warn( value );
    
      break;

    default :

      return bunyan;

  }

};

module.exports = {

  errorHandler,
  log

};
