export const Version = () => {

  const website = 'http://monsieurbadia.com';
  const [ name, message ] = [ 'd2k.js | v0.0.0', 'code by @monsieurbadia with 🖤' ]

  const show = () => {

    if ( navigator.userAgent.toLowerCase().indexOf( 'chrome' ) > - 1 ) {

        const args = [
          `%c ${ name } %c ${ message }`,
          `color: #000000; background: #ffffff; padding: 3px 0;`,
          `padding: 3px 1px; color: #000000; text-decoration: none;`,
        ];

        console.log.apply( console, args );

    } else if ( window.console ) {
    
      console.log( `${ author } ${ website } `);
    
    }
  
  }

  return show();

};
