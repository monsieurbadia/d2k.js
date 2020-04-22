import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const THREEGeometry = ( RENDERING_ENGINE, parameters ) => new RENDERING_ENGINE[ strings.toFirstLetterUpperCaseReducer( parameters.type, 'geometry' )  ]( ...parameters.args );
