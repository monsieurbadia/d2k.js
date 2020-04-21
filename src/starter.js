import { is, pipe, reducer, strings } from 'u3s';
import { /*Creater,*/ /*Version,*/ DOM, Renderer } from '=>/core/core';

import {
  BABYLONCamera,
  BABYLONEngine,
  BABYLONLight,
  BABYLONMesh,
  BABYLONScene
} from '=>/engine/babylon/primitive/primitive';

import {
  THREECamera,
  THREELight,
  THREELoader,
  THREEMesh,
  THREERenderer,
  THREEScene
} from '=>/engine/three/primitive/primitive';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @private */
const PRIMITIVE = {
  BABYLONCamera,
  BABYLONLight,
  BABYLONMesh,
  BABYLONEngine,
  BABYLONScene,
  THREECamera,
  THREELight,
  THREELoader,
  THREEMesh,
  THREERenderer,
  THREEScene
};

/** @public */
export const Creater = ( key, payload ) => {

  // console.log( key, payload )

  const currentEngineName = payload.ENGINE.BoxBufferGeometry ? 'THREE' : 'BABYLON';
  const currentInstanceName = `${ currentEngineName }${ strings.toFirstLetterUpperCase( key ) }`;
  const Instance = PRIMITIVE[ currentInstanceName ];

  return {
    ...payload,
    [ key ]: reducer( payload[ key ], result => Instance( payload.ENGINE, result ) )
  };

};


/** @public */
const onstarter = ( init = {} ) => {

  const conf = init;

  const useEngine = engine => {

    conf.ENGINE = engine;
    conf.ENGINE.coreData = {};

    Object.assign( conf, { dom: DOM( engine ) } );

    return onstarter( conf );

  };

  const withCamera = ( { name, config } ) => {

    if ( conf.camera === undefined ) {

      conf.camera = {};

    }
    
    conf.camera[ name ] = THREECamera( conf.ENGINE, config );

    return onstarter( conf );

  };

  const withLight = ( { name, config } ) => {

    if ( conf.light === undefined ) {

      conf.light = {};

    }

    conf.light[ name ] = THREELight( conf.ENGINE, config );

    return onstarter( conf );

  };

  const withMesh = ( { name, config } ) => {

    if ( conf.mesh === undefined ) {

      conf.mesh = {};

    }

    conf.mesh[ name ] = THREEMesh( conf.ENGINE, config );

    return onstarter( conf );

  };

  const withLoader = ( { name, config } ) => {

    if ( conf.loader === undefined ) {

      conf.loader = {};

    }

    conf.loader[ name ] = THREELoader( conf.ENGINE, config );

    return onstarter( conf );

  };

  const withRenderer = ( { name, config } ) => {

    if ( conf.renderer === undefined ) {

      conf.renderer = {};

    }

    conf.renderer[ name ] = THREERenderer( conf.ENGINE, config );

    return onstarter( conf );

  };

  const withScene = ( { name, config } ) => {

    if ( conf.scene === undefined ) {

      conf.scene = {};

    }

    const composer = ( parameters ) => {

      return Object.keys( parameters ).reduce( ( result, key ) => {

        const option = parameters[ key ];

        switch( key ) {

          case 'camera':

            if ( is.empty( conf.camera ) ) break;

            const cameras = Object.keys( option ).reduce( ( d, k ) => {

              const name = option[ k ];

              return {
                ...d,
                [ k ]: !is.array( name ) ? conf.camera[ name ] : name.map( ( e ) => conf.camera[ e ] )
              }; 

            }, {} );
          
            return {
              ...result,
              [ key ]: cameras
            };
            
          case 'light':

            if ( is.empty( conf.light ) ) break;

            const light = option.reduce( ( m, k ) => {
              
              return {
                ...m,
                [ k ]: conf.light[ k ]
              };
            }, {} );

            return {
              ...result,
              [ key ]: light
            };

          case 'loader':

            if ( is.empty( conf.loader ) ) break;

            // console.log( 'parameters', parameters );

            break;

          case 'mesh':

            if ( is.empty( conf.mesh ) ) break;

            const mesh = option.reduce( ( m, k ) => ( { ...m, [ k ]: conf.mesh[ k ] } ), {} );

            return {
              ...result,
              [ key ]: mesh
            };

          case 'renderer':

            if ( is.empty( conf.renderer ) ) break;

            return {
              ...result,
              [ key ]: conf.renderer[ parameters.renderer ]
            };

          default:
            return parameters;

        }
  
        return {
          ...result,
        };

      }, {} );

    };

    conf.scene[ name ] = THREEScene( conf.ENGINE, config );

    const starter = composer( config );

    conf.scene[ name ].add( starter.mesh.myMeshName );
    starter.renderer.onrender( { renderer: starter.renderer, scene: conf.scene[ name ], camera: starter.camera.main } )

    document.body.appendChild( starter.renderer.domElement );

    return onstarter( conf );

  };

  const value = _ => conf;

  return {
    useEngine,
    withCamera,
    withLight,
    withLoader,
    withMesh,
    withRenderer,
    withScene,
    value,
  };

};

const d2k = Object.assign( {
  onstarter
} );

module.exports = d2k;