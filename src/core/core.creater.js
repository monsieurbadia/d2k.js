import { reducer } from 'u3s';

/** @public */
export const Creater = ( name, payload ) => {
  
  // console.log( name, payload[ name ] )
  
  return {
    ...payload,
    [ name ]: reducer( payload[ name ], result => Instance( payload.ENGINE, result ) )
  };
};
