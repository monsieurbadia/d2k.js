import { strings } from 'u3s';
import { parseTextToFirstLetterUpperCase } from '=>/util/util.parser';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @oublic */
export const THREELight = ( ENGINE, parameters ) => {

  const instanceName = parseTextToFirstLetterUpperCase( parameters.option.type, 'light' );
  const light = new ENGINE[ instanceName ]( strings.ToInt( ...parameters.option.args, ' ' ) );
  
  return light;

};
