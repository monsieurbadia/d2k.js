import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const BABYLONLight = ( RENDERING_ENGINE, parameters ) => {

  const { scene } = RENDERING_ENGINE.coreData;
  const { args, type } = parameters;
  const instanceName = strings.toFirstLetterUpperCaseReducer( type, 'light' );
  const light = new RENDERING_ENGINE[ instanceName ](
    'light', new RENDERING_ENGINE.Vector3( ...args ), scene
  );

  return light;

};
