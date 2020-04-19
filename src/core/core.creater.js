import { reducer, strings } from 'u3s';
import SIG3 from 'SIG3';

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

  const currentInstanceName = payload.ENGINE.BoxBufferGeometry ? 'THREE' : 'BABYLON';
  const Instance = PRIMITIVE[ `${ currentInstanceName }${ strings.toFirstLetterUpperCase( key ) }` ];

  payload.ENGINE.coreData.station = new SIG3.Station();

  return {
    ...payload,
    [ key ]: reducer( payload[ key ], result => {
    
      const instance = Instance( payload.ENGINE, result );
      
      instance.fs = [ state => {

        console.log( state );

        return state;

      } ];

      payload.ENGINE.coreData.station.onsignal( 'event:oncreate', instance );

      return instance;

    } )
  };

};
