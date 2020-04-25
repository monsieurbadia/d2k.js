import { strings } from 'u3s';

import {
  BABYLONCamera,
  BABYLONEngine,
  BABYLONLight,
  BABYLONMesh,
  BABYLONScene
} from '=>/engine/babylon';

import {
  THREECamera,
  THREELight,
  THREELoader,
  THREEMesh,
  THREERenderer,
  THREEScene
} from '=>/engine/three';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

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
export const Creater = ( RENDERING_ENGINE, key, payload ) => {

  const currentEngineName = RENDERING_ENGINE.BoxBufferGeometry ? 'THREE' : 'BABYLON';
  const currentInstanceName = `${ currentEngineName }${ strings.toFirstLetterUpperCase( key ) }`;
  
  return PRIMITIVE[ currentInstanceName ]( RENDERING_ENGINE, payload );

};
