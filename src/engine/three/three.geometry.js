import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const THREEGeometry = ( {
  RENDERING_ENGINE,
  config = {
    args: [ 20, 20, 20 ],
    type: 'box-buffer'
  }
} = {} ) => {

  const instanceName = strings.toFirstLetterUpperCaseReducer( config.type, 'geometry' );

  return new RENDERING_ENGINE[ instanceName ]( ...config.args );

};
