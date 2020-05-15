import { ua } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export const Semverlog = _ => {

  const { version } = require( '../../package.json' );
  const [ name, semver ] = [ `d2k.js`, `v${ version }` ];

  const args = [
    `%c ${ name } %c ${ semver } `,
    `color: #ffffff; background: #000000; padding: 3px 0;`,
    `padding: 3px 0; color: #000000; background: #ffffff; text-decoration: none;`,
  ];

  const show = _ => {

    if ( ua.browser() ) {
      console.log.apply( console, args );
    } else if ( window.console ) {
      console.log( `${ name } ${ version } `);
    }

    return true;

  };

  return show();

};
