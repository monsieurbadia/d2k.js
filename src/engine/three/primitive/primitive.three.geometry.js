import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const THREEGeometry = ( ENGINE, parameters ) => new ENGINE[ strings.toFirstLetterUpperCaseReducer( parameters.type, 'geometry' )  ]( ...parameters.args );
