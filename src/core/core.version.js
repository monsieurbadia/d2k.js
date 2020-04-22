export const Version = semver => {

  const [ name, message ] = [ `d2k.js | v${ semver || '0.0.0' }`, 'by @monsieurbadia' ];

  const show = _ => {

    if ( /Chrome/.test( navigator.userAgent ) ) {

      const args = [
        `%c ${ name } %c ${ message } `,
        `color: #ffffff; background: #000000; padding: 3px 0;`,
        `padding: 3px 0; color: #000000; background: #ffffff; text-decoration: none;`,
      ];

      console.log.apply( console, args );

    } else if ( window.console ) {
    
      console.log( `${ author } ${ website } `);
    
    }
  
  }

  return show();

};
