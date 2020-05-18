
const examples = [

	{
		title: 'hellow world glsl',
		slug: 'hello-world-three-js',
		html: `
			<p>how to create a scene with three.js?</p>
		`
  }

];

examples.forEach( example => {
	example.html = example.html.replace( /^\t{3}/gm, '');
} );

export default examples;
