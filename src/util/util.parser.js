import { strings } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const parseTextToFirstLetterUpperCase = ( str, insertion ) => {

  const content = str.split( /[-._]/g );

  return content.reduce( ( result, s, i ) => {

    result += strings.toFirstLetterUpperCase( s );

    if ( insertion && i === content.length - 1 ) result += strings.toFirstLetterUpperCase( insertion );

    return result;

  }, '' );

};
