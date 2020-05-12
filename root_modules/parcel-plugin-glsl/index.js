/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

const TYPES = [
  'glsl',
  'vert',
  'frag',
  'vs',
  'fs'
];

module.exports = function ( bundler ) {

  const GLSLAssetPath = require.resolve( './src/GLSLAsset' );

  TYPES.forEach( function ( type ) { bundler.addAssetType( type, GLSLAssetPath ) } );

};
