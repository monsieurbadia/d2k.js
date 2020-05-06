# <img src="images/d2k-logo-standard.png"/>

# <img src="images/d2k-logo-standard.svg"/> d2k.js [![NPM Package][npm]][npm-url] [![Build Size][build-size]][build-size-url] [![NPM Downloads][npm-downloads]][npmtrends-url] [![Dev Dependencies][dev-dependencies]][dev-dependencies-url]

<p align="center"><a href="https://twitter.com/monsieurbadia"><img alt= "Twitter Follow" src="https://img.shields.io/twitter/follow/monsieurbadia?label=follow"/></a></p>

> *primitive builder based on [three.js](https://threejs.org) x [babylon.js](https://www.babylonjs.com) that will help you to created a scene in an intuitive and functional way.*



[english](README.md) - [french](./documentation/documentation.readme.fr.md)    

## <img src="images/icons/icon-problem.svg"/> Problems

- DRY (do not repeat yourself)
- webgl API too complex to make young people want to pay attention to 3d programming

## <img src="images/icons/icon-solution.svg"/> Solutions

- automate the creation of primitives
- automate the composition of the scene
- create a scene from a `JSON` file
- support `GLSL` x `THREE` x `BABYLON`
- switch between babylon.js and three.js with a single line of code
- create experimental experience such as being able to make a kind of `Object.assign (THREE, BABYLON)`, which would give a single canvas the possibility of displaying the two scenes simultaneously on the screen

## <img src="images/icons/icon-start-project.svg"/> Getting Started

before you start be sure that your project include `three.js` and / or `babylon.js`, once it's good for you, you can install **d2k** via your shell.    

**examples (jsfiddle)**    

[using shader](https://jsfiddle.net/_monsieurbadia/j4n19puL) - [using three.js](https://jsfiddle.net/_monsieurbadia/yga7rf09) - [using babylon.js](https://jsfiddle.net/_monsieurbadia/b8ju2gmz) - [layerization (three.js x babylon.js)](https://jsfiddle.net/_monsieurbadia/brq43fsu) - [hello world](https://jsfiddle.net/_monsieurbadia/cx9tq8b5)  

## <img src="images/icons/icon-installation.svg"/> Install    
       
**shell**

```sh
npm i d2k
```

OR

```sh
yarn add d2k
```

**alternative**

download the project, copy the file `d2k.js` which is located in the folder `/dist` then you are free to install it in the place provided for this purpose in your application. now you have to import d2k into your module or into your html page and follow this syntax.   

**ecmascript**

```js
import d2k from 'd2k';
import * as THREE from 'three';

window.addEventListener( 'DOMContentLoaded', _ => {

  const THREEstarter = d2k
    .onstarter( { canvas: 'myCanvasId' } )
    .use( THREE )
    .withScene( { name: 'mySceneName' } )
    .withCamera( { name: 'myCameraName' } )
    .withMesh( { name: 'myMeshName' } )
    .withRenderer( { name: 'myRendererName' } )
    .composify( {
      config: {
        start: true,
        scene: { main: 'mySceneName' },
        mesh: [ { name: 'myMeshName', parent: 'main' } ],
        light: [ { name: 'myLightName', parent: 'main' } ],
        camera: { main: 'myCameraName' },
        renderer: 'myRendererName'
      }
    } )
    .value();

  // use the onrender method to update a mesh, the callback take time in argument.
  THREEstarter.mesh.myMeshName.onrender( time => {

    THREEstarter.mesh.myMeshName.rotation.x += time;
    THREEstarter.mesh.myMeshName.rotation.y += time;

  } );

}, false );
```

**html x javascript**

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>d2k.js - example - hello world</title>
  </head>
  <body>
    <canvas id="myCanvasId" touch-action="none"></canvas>
    <script src="https://raw.githack.com/monsieurbadia/d2k.js/master/build/d2k.js"></script>
    <script src="https://threejs.org/build/three.js"></script>
    <script>
      window.addEventListener( 'DOMContentLoaded', function () {

        var THREEstarter = d2k
          .onstarter( { canvas: 'myCanvasId' } )
          .use( THREE )
          .withScene( { name: 'mySceneName' } )
          .withCamera( { name: 'myCameraName' } )
          .withMesh( { name: 'myMeshName' } )
          .withRenderer( { name: 'myRendererName' } )
          .composify( {
            config: {
              start: true,
              scene: { main: 'mySceneName' },
              mesh: [ { name: 'myMeshName', parent: 'main' } ],
              camera: { main: 'myCameraName' },
              renderer: 'myRendererName'
            }
          } )
          .value();

        // use the onrender method to update a mesh, the callback take time in argument.
        THREEstarter.mesh.myMeshName.onrender( time => {

          THREEstarter.mesh.myMeshName.rotation.x += time;
          THREEstarter.mesh.myMeshName.rotation.y += time;

        } );

      }, false );
    </script>
  </body>
</html>
```

## <img src="images/icons/icon-syntax.svg"/> Syntax

following this syntax bellow which allows you to chain methods to compose a `scene` step by step.

**using glsl**

create a 100% `gpu` scene through `shader` in `GLSL`   

```js
const GLSLstarter = d2k
  .onstarter( { canvas: 'myCanvasId', glsl: true } )
  .use( THREE ) //
  .withShader( /*  shader config */ )
  .value();
```

**using babylon.js**

create a scene from the primitives of `BABYLON`    

```js
const BABYLONstarter = d2k
  .onstarter( { canvas: 'myCanvasId' } )
  .use( BABYLON )
  .withEngine( /* engine config */)
  .withScene( /* scene config */)
  .withLight( /* light config */)
  .withMesh( /* mesh config */)
  .composify( /* composify config */ )
  .value();
```

**using three.js**

create a scene from the primitives of `THREE`     

```js
const THREEstarter = d2k
  .onstarter( { canvas: 'myCanvasId' } )
  .use( THREE )
  .withCamera( /* camera config */ )
  .withMesh( /* mesh config */ )
  .withRenderer( /* renderer config */ )
  .withLight( /* light config */ )
  .withLoader( /* loader config */ )
  .withScene( /* camera config */ )
  .composify( /* camera config */ )
  .value();
```

## <img src="images/icons/icon-config.svg"/> Configuration

*a `scene` can be created from a `JSON` file and must respect the following format:*

[glsl config format](./config/../documentation/configuration/config.glsl.format.md) - [babylon.js config format](./config/../documentation/configuration/config.babylon.format.md) - [three.js config format](./documentation/configuration/config.three.format.md)   

## <img src="images/icons/icon-api.svg"/> API

- ### `d2k.onstarter( init )`

  *initialize a `scene` from an `init` object pass in parameter. to create a scene `.onstarter()` has to be used first.*

  ##### usage

  `GLSL` x `BABYLON` x `THREE`

  ##### params

  `init` **{ Object }**: initialize a `starter`    
  `returns` **{ Object }**: collection of methods.     

  ##### example

  ```js
  const starter = d2k
    .onstarter( {
      canvas: 'myCanvasId', // or use an HTMLCanvasElement,
      glsl: false // optional
    } );
  ```

- ### `.use( RENDERING_ENGINE )`

  *define the current `RENDERING_ENGINE` wich will be used to create primitives. `.use()` has to been calls just after the `.onstarter()` method.*

  ##### usage

  `GLSL` x `BABYLON` x `THREE`

  ##### params

  `RENDERING_ENGINE` **{ Object }**: the current engine (`THREE` | `BABYLON`)     
  `returns` **{ Object }**: collection of methods.     

  ##### example

  ```js
  const starter = d2k
    .onstarter( /* init */ )
    .use( BABYLON || THREE );
  ```

- ### `.withCamera( config )`

  *create a `camera` from an `config` object pass in parameter.*

  ##### usage

  `BABYLON` x `THREE`

  ##### params

  `config` **{ Object }**: definition of the configuration of a `camera`.  
  `returns` **{ Object }**: collection of methods. 

  ##### example

  ```js
  const starter = d2k
    .onstarter( /* init */ )
    .use( BABYLON || THREE )
    .withCamera( {
      name: 'myCameraName',
      config: {
        args: [ 75, null, 0.1, 1000 ],
        position: [ 0, 0, 100 ],
        rotation: [ 0, 0, 0 ],
        scale: [ 1, 1, 1 ],
        type: 'perspective'
      }
    } );
  ```

- ### `.withEngine( config )`

  *define an `engine` from a `config` object passed as a parameter.*   

  ##### usage

  `BABYLON`

  ##### params

  `config` **{ Object }**: a `engine` config.     
  `returns` **{ Object }**: collection of methods.     

  ##### example

  ```js
  const starter = d2k.onstarter( /* init */ )
    .use( BABYLON )
    .withEngine( { name: 'myEngineName' } );
  ```

- ### `.withMesh( config )`

  *create a `mesh` from an `config` object pass in parameter.*

  ##### usage

  `BABYLON` x `THREE`

  ##### params

  `config` **{ Object }**: a `mesh` config. 
  `returns` **{ Object }**: collection of methods. 

  ##### example

  ```js
  const starter = d2k.onstarter( /* init */ )
    .use( BABYLON || THREE )
    .withMesh( {
      name: "myMeshName",
      config: {
        geometry: {
          args: [ 20, 20, 20 ],
          type: "box-buffer"
        },
        material: {
          args: { "transparent": true },
          type: "mesh-normal"
        },
        positions: [ -20, 0, 0 ],
      }
    } );
  ```

- ### `.withLight( config )`

  *create a `light` from a `config` object pass in parameter.*

  ##### usage

  `BABYLON` x `THREE`

  ##### params

  `config` **{ Object }**: a `light` config. 
  `returns` **{ Object }**: collection of methods. 

  ##### example

  ```js
  const starter = d2k.onstarter( /* init */ )
    .use( BABYLON || THREE )
    .withLight( {
      name: "myLightName",
      config: {
        args: [ "0xf1f5bb" ],
        position: [ 0, 1, 30 ],
        type: "directional"
      }
    } );
  ```

- ### `.withLoader( config )`

  *load a `texture` | `object` from a `config` object to pass in parameter.*

  ##### usage

  `THREE`

  ##### params

  `config` **{ Object }**: a `loader` config.  
  `returns` **{ Object }**: collection of methods. 

  ##### example

  ```js
  const starter = d2k.onstarter( /* init */ )
    .use( BABYLON || THREE )
    .withLoader( {
      name: "textures",
      config: {
        args: [ { "name": "img-1", "url": "/my-image-path.jpg" }, { "name": "img-2", "url": "/my-image-pathjpg" } ],
        type: "texture"
      }
    } );
  ```

- ### `.withRenderer( config )`

  *create a `renderer` from a `config` object pass parameter.*

  ##### usage

  `THREE`

  ##### params

  `config` **{ Object }**: a `renderer` config  
  `returns` **{ Object }**: collection of methods. 

  ##### example

  ```js
  const starter = d2k.onstarter( /* init */ )
    .use( BABYLON || THREE )
    .withRenderer( {
      name: "myRendererName",
      config: {
        antialias: true,
        autoClear: true,
        pixelRatio: null,
        size: [],
        type: "webgl"
      }
    } );
  ```

- ### `.withScene( config )`

  *compose une `scene` à partir d'un objet `config` passer en paramètre de la méthode `.withScene`*

  ##### usage

  `BABYLON` x `THREE`

  ##### params

  `config` **{ Object }**: définition de la config d'une `scene`  
  `returns` **{ Object }**: collection de méthodes. 

  ##### example

  ```js
  const starter = d2k.onstarter( /* init */ )
    .use( BABYLON || THREE )
    .withScene( { name: "mySceneName" } );
  ```

- ### `.withShader( config )`

  *crée des `shader` à partir d'un objet `config` passer en paramètre de la méthode `.withShader`*

  ##### usage

  `GLSL`

  ##### params

  `config` **{ Object }**: définition de la config des `shader`  
  `returns` **{ Object }**: collection de méthodes. 

  ##### example

  ```js
  const starter = d2k.onstarter( /* init */ )
    .use( THREE )
    .withShader( {
      name: 'myShaderName',
      config : {
        vertexShader: `
          void main () {
            gl_Position = vec4(position, 1.0);
          }
        `,
        fragmentShader: `
          uniform vec2 resolution;
          uniform float time;

          void main () {
            vec2 st = gl_FragCoord.xy / resolution.xy;
            gl_FragColor = vec4(st.x, st.y, 0.0, 1.0);
          }
        `
      }
    } );
  ```

- ### `d2k.onrender( TARGET, SOURCE )`

  *create a `scene` from a `TARGET` and a `SOURCE` pass in parameters. ***note: this method will get two different `starter` to merge them and display the two scenes through a single canvas. be careful, this part is still experimental.****   

  ##### usage

  `BABYLON` x `THREE`   

  ##### params

  `TARGET` **{ Object }**: a `THREE` starter.
  `SOURCE` **{ Object }**: a `BABYLON` starter.
  `returns` **{ Object }**: a `renderer`.   

  ##### example

  ```js
  // babylonjs only
  BABYLONstarter.renderer.onrender( {
    engine: BABYLONstarter.engine.myEngineName
    scene: BABYLONstarter.scene.mySceneName
  } );
  ```

  ```js
  // threejs only
  THREEstarter.renderer.onrender( {
    renderer: THREEstarter.renderer,
    scene: THREEstarter.scene.main,
    camera: THREEstarter.camera.main
  } );
  ```

  ```js
  // both together
  d2k.onrender( {
    renderer: THREEstarter.renderer.current,
    scene: THREEstarter.scene.mySceneName,
    camera: THREEstarter.camera.current
  }, {
    engine: BABYLONstarter.engine.current,
    scene: BABYLONstarter.scene.mySceneName
  } );
  ```

- ### `.composify( config )`

  *composition of the scene to be displayed. This method allows you to compose a scene step by step.*   

  ##### usage

  `BABYLON` x `THREE`

  ##### params

  `config` **{ Object }**: a `composify` config.    
  `returns` **{ Object }**: a `renderer`.   

  ##### example

  ```js
  const starter = d2k.composify( {
    config: {
      start: true,
      scene: {
        main: 'mySceneName',
        others: []
      },
      mesh: [ { 'name': 'myMeshName', 'parent': 'main' } ],
      light: [ { 'name': 'myLightName', 'parent': 'main' } ],
      camera: {
        main: 'myCameraName',
        others: []
      },
      renderer: 'myRendererName'
    }
  } );
  ```

- ### `.value()`

  *returns a `starter` object that contains a collection of primitives. ***note: `.value()` can be called at any time during the creation step****   

  ##### usage

  `GLSL` x `BABYLON` x `THREE`

  ##### params

  `no params`   
  `returns` **{ Object }**: a `starter` collection.    

  ##### example

  ```js
  const starter = d2k
    .onstarter( /* init config */ )
    .use( BABYLON || THREE )
    .withCamera( /* camera config */ )
    .value();
  ```

- ### `starter`
  
  *contains a collection of primitives you have created and some methods.*

- ### `events`

  *`mesh` `light` `camera` hold events which are called in specific contexts `onrender` `onloader` `onresize`.* 

  ##### onloader

  ```js
  // get textures
  starter.mesh.myMeshName.onloader( textures => textures );
  ```

  ##### onrender

  ```js
  // update
  starter.mesh.myMeshName.onrender( timer => {
    starter.mesh.myMeshName.rotation.x += time;
    starter.mesh.myMeshName.rotation.y += time;
  } );
  ```

  ##### onresize

  ```js
  // resize
  starter.mesh.myMeshName.onresize( size => {
    starter.mesh.myMeshName.material.uniforms.resolution.value.x += size.width;
    starter.mesh.myMeshName.rotation.uniforms.resolution.value.y += size.height;
  } );
  ```

## Tips 

**fetch scene from a `JSON` config file**

```js
// babylon
fetch( 'http://localhost:5007/api/scene/babylon' )
  .then( response => response.json() )
  .then( ( { scene } ) => {

    const starter = d2k
      .onstarter( { canvas: 'viewRendering' } )
      .use( BABYLON )
      .withEngine( scene.engine )
      .withScene( scene.scene )
      .withCamera( scene.camera )
      .withLight( scene.light )
      .withMesh( scene.mesh )
      .composify( scene.composify )
      .value();

    starter.mesh.myMeshName.onrender( time => {

      starter.mesh.myMeshName.rotation.x -= time;
      starter.mesh.myMeshName.rotation.y -= time;

    } );

  } );
```

```js
// glsl
fetch( 'http://localhost:5007/api/scene/glsl' )
  .then( response => response.json() )
  .then( ( { scene } ) => {

    const starter = d2k
      .onstarter( scene.init )
      .use( THREE )
      .withShader( scene.shader )
      .value();

    starter.shader.myShaderName.onrender( time => time );

    starter.shader.myShaderName.onresize( size => {

      starter.shader.myShaderName.material.uniforms.resolution.value.x = size.width;
      starter.shader.myShaderName.material.uniforms.resolution.value.y = size.height;

    } );

  } );
```

```js
// three
fetch( 'http://localhost:5007/api/scene/three' )
  .then( response => response.json() )
  .then( ( { scene } ) => {

    const starter = d2k
      .onstarter( { canvas: 'viewRendering' } )
      .use( THREE )
      .withCamera( scene.camera )
      .withRenderer( scene.renderer )
      .withMesh( scene.mesh )
      .withLight( scene.light )
      .withScene( scene.scene )
      .composify( scene.composify )
      .value();

    starter.mesh.myMeshName.onloader( textures => textures );

    starter.mesh.myMeshName.onrender( time => {

      starter.mesh.myMeshName.rotation.x += time;
      starter.mesh.myMeshName.rotation.y += time;

    } );

  } );
```

```js
// async
const fetchStarterScene = async ( url ) => {

  const response = await fetch( url );
  const sceneConfig = await response.json();
  const data = d2k.onstarter( { canvas: 'viewRendering' } )
    .use( THREE )
    .onstarter( { canvas: 'viewRendering' } )
    .withCamera( scene.camera )
    .withRenderer( scene.renderer )
    .withMesh( scene.mesh )
    .withLight( scene.light )
    .withScene( scene.scene )
    .composify( scene.composify )
    .value();

  return data;

};

fetchStarterScene( 'https://mydomain.com/my/scene/config/endpoint' );
```

## <img src="images/icons/icon-primitive.svg"/> Primitives

primitive         | babylon.js                                  | three.js                                    |
------------------|---------------------------------------------|---------------------------------------------|
audio             | <img src="images/icons/icon-check.svg"/> | <img src="images/icons/icon-check.svg"/> |
camera            | <img src="images/icons/icon-not.svg"/>   | <img src="images/icons/icon-not.svg"/>   |
font              | <img src="images/icons/icon-check.svg"/> | <img src="images/icons/icon-check.svg"/> |
geometry          | <img src="images/icons/icon-check.svg"/> | <img src="images/icons/icon-not.svg"/>   |
group             | <img src="images/icons/icon-check.svg"/> | <img src="images/icons/icon-not.svg"/>   |
light             | <img src="images/icons/icon-not.svg"/>   | <img src="images/icons/icon-not.svg"/>   |
loader            | <img src="images/icons/icon-check.svg"/> | <img src="images/icons/icon-not.svg"/>   |
material          | <img src="images/icons/icon-not.svg"/>   | <img src="images/icons/icon-not.svg"/>   |
mesh              | <img src="images/icons/icon-not.svg"/>   | <img src="images/icons/icon-not.svg"/>   |
renderer          | <img src="images/icons/icon-not.svg"/>   | <img src="images/icons/icon-not.svg"/>   |
scene             | <img src="images/icons/icon-not.svg"/>   | <img src="images/icons/icon-not.svg"/>   |

## <img src="images/icons/icon-disclaimer.svg"/> Disclaimer

I am not a developer, I am a normal guy who carries programming in his heart and wants to contribute to open source and help the 3d community. for now, this is just an experimental version of an idea I had in mind. But my idea will evolve through this project so my design errors, over time, will disappear. changes will be coming for everyone's comfort, I hope. triforce! 

## <img src="images/icons/icon-reference.svg"/> References

- [Mr.doob's Code Style™](https://github.com/mrdoob/three.js/wiki/Mr.doob's-Code-Style%E2%84%A2)
- [BabylonJS](http://www.babylonjs.com)
- [three.js](https://threejs.org)

## <img src="images/icons/icon-copyright.svg"/> License

Copyright ©️ 2020 monsieurbadia

Released under the [MIT](https://github.com/monsieurbadia/glsl-reports/blob/master/LICENSE.md) license

## <img src="images/icons/icon-supports.svg"/> Support

*⭐️ this repository if this project helped you!*    

## <img src="images/icons/icon-heart.svg"/> Contributors

logo - [@Mlle_Martinss](https://twitter.com/Mlle_Martinss)        
icons - [@AdrienCoquet](https://twitter.com/AdrienCoquet)     
code - [@monsieurbadia](https://twitter.com/monsieurbadia)       

[npm]: https://img.shields.io/npm/v/d2k
[npm-url]: https://www.npmjs.com/package/d2k
[build-size]: https://badgen.net/bundlephobia/minzip/d2k
[build-size-url]: https://bundlephobia.com/result?p=d2k
[npm-downloads]: https://img.shields.io/npm/dw/d2k
[npmtrends-url]: https://www.npmtrends.com/d2k
[dev-dependencies]: https://img.shields.io/david/dev/monsieurbadia/d2k.js
[dev-dependencies-url]: https://david-dm.org/monsieurbadia/d2k.js#info=devDependencies
