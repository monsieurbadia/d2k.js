/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

const cleanUselessProperty = ( object, properties ) => properties.forEach( property => delete object[ property ] );

export const Deletion = {

  cleanUselessProperty

};
