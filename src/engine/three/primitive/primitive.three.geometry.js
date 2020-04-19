import { parseTextToFirstLetterUpperCase } from '=>/util/util';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const THREEGeometry = ( ENGINE, parameters ) => new ENGINE[ parseTextToFirstLetterUpperCase( parameters.type, 'geometry' )  ]( ...parameters.args );
