export const Version = () => {

  const author = 'Bedroom Galaxy App | Coding by @monsieurbadia';
  const website = 'http://monsieurbadia.com';
  const bros = [
    [ 'Bedroom Galaxy', ''],
    [ 'coding by @monsieurbadia', '' ],
    [ 's/o to my bros ! thank you so much for your time 🙏🙏🙏', '' ],
    [ '@billytaing ✨', 'https://linkedin.com/in/taingbilly' ],
    [ '@brice ✨', 'http://twitter.com/brice' ],
    [ '@davidrousset ✨', 'http://twitter.com/davrous.com' ],
    [ '@kot3i ✨', 'http://twitter.com/k0t3i' ],
    [ '@mllemartins ✨', 'http://twitter.com/mlle_martinss' ],
    [ '@rudyweber ✨', 'http://twitter.com/rudy_weber' ],
    [ '@siegfried ✨', 'http://twitter.com/siegfriedehret' ],
    [ '@studiojeannin ✨', 'http://studiojeannin.com'  ]
  ];

  const show = () => {

    if ( navigator.userAgent.toLowerCase().indexOf( 'chrome' ) > - 1 ) {

      for ( let index = bros.reverse().length - 1; index >= 0; index -- ) {

        const [ author, website ] = bros[ index ];

        const args = [
          `%c ${ author } %c ${ website }`,
          `color: ${ index === 10 ? '#ffffff' : '#000000' }; background: ${ index === 10 ? '#ff5c7c' : '#ffffff' }; padding: 3px 0;`,
          `padding: 3px 1px; color: #000000; text-decoration: none;`,
        ];

        console.log.apply( console, args );

      };

    } else if ( window.console ) {
    
      console.log( `${ author } ${ website } `);
    
    }
  
  }

  return show();

};
