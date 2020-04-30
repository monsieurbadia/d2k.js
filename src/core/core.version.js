import { ua } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const Version = semver => {

  const [ name, version ] = [ `d2k.js`, `v${ semver || '0.0.0' }` ];
  const args = [
    `%c ${ name } %c ${ version } `,
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
