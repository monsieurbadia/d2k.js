const fs = require( 'fs' );
const uuid = require( 'uuid' );
const paths = require('../paths');
const tools = require('../tools/tools');

const getSceneConfig = ( request, response, next ) => {

  try {

    const { params: { name } } = request;

    if ( name.length > 0 ) {

      const id = uuid();
      const scene = JSON.parse( fs.readFileSync( `${ paths.scene }/config.${ name }.json` ) );
      const data = { id, scene };
  
      response
        .send( data )
        .end();

    }

  } catch ( error ) {

    tools.errorHandler( error, request, response, next );

  }

};

module.exports = { getSceneConfig };
