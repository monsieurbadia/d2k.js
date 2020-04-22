import { reducer, strings } from 'u3s';

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

  console.log( key, payload )

  const currentEngineName = payload.ENGINE.BoxBufferGeometry ? 'THREE' : 'BABYLON';
  const currentInstanceName = `${ currentEngineName }${ strings.toFirstLetterUpperCase( key ) }`;
  const Instance = PRIMITIVE[ currentInstanceName ];

  return {
    ...payload,
    [ key ]: reducer( payload[ key ], result => Instance( payload.ENGINE, result ) )
  };

};
