# <img src="images/d2k-logo-standard.png"/>

# <img src="images/d2k-logo-standard.svg"/> d2k.js <!-- [![NPM Package][npm]][npm-url] [![Build Size][build-size]][build-size-url] [![NPM Downloads][npm-downloads]][npmtrends-url] [![Dev Dependencies][dev-dependencies]][dev-dependencies-url] -->

> *micro-couche javascript basé sur [three.js](https://threejs.org) x [babylon.js](https://www.babylonjs.com) pour créer des scènes 3d rapidement de façon intuitive, élégante et fonctionnelle.*

<a href="https://twitter.com/monsieurbadia"><img src="./images/icons/icon-twitter.svg"/> follow me on twitter</a>

[anglais](README.md) - [français](./documentation/documentation.readme.fr.md)    

## <img src="images/icons/icon-problem.svg"/> Problems

- DRY do not repeat yourself).
- lack of innovation of webgl starters of the type `three-starter-of-the-death-that-kills` `view-babylon-starter ++` etc.
- waste my time to display a simple cube using the native wegl API.
- webgl API too complex to make young people want to pay attention to 3d programming.

## <img src="images/icons/icon-solution.svg"/> Solutions

- automate the creation of primitives.
- automate the composition of the scene
- create a scene from a `.json` file.
- switch between babylon and three in a single line of code.
- create experimental experiences such as being able to make an `Object.assign (THREE, BABYLON)`, which would give a single canvas the possibility of displaying the two scenes simultaneously on the screen.

## <img src="images/icons/icon-goals.svg"/> Goals

- support `GLSL`
- support `THREE`
- support `BABYLON`
- support `JSON`
- support `Object.assign (THREE, BABYLON)`
- support `chrome` `edge` `firefox` `safari`

## <img src="images/icons/icon-disclaimer.svg"/> Disclaimer

I am not a developer, I am a normal guy who carries programming in his heart and wants to contribute to open source and help the 3d community. for now, this is just an experimental version of an idea I had in mind. But my idea will evolve through this project so my design errors, over time, will disappear. changes will be coming for everyone's comfort, I hope. triforce!    

## <img src="images/icons/icon-installation.svg"/> Install    
    
before you start be sure that your project include `three.js` and / or `babylon.js`, once it's good for you, you can install **d2k** via your shell.    

**shell**

```sh
npm i d2k
```

OU

```sh
yarn add d2k
```

voilà! the project is installed. check in `.package.json` if `d2k` is in the dependencies of your application.

**alternative**

download the project, copy the file `d2k.js` which is located in the folder `/dist` then you are free to install it in the place provided for this purpose in your application.    

## <img src="images/icons/icon-start-project.svg"/> Start project

maintenant, tu n'as plus qu'à importer **d2k** dans ton module ou ta page html.

**ecmascript**

```js
import d2k from 'd2k';
```

**html | javascript**

```html
<script src="./d2k.js"></script>
```

## <img src="images/icons/icon-syntax.svg"/> Syntax

here is an overview of the syntax of ** d2k ** which allows you to chain methods to compose a `scene` step by step.

**glsl starter**

create a 100% `gpu` scene through `shader` in `glsl`   

```js
const GLSLstarter = d2k
  .onstarter( { canvas: 'myCanvasId', glsl: true } )
  .use( THREE ) //
  .withShader( /*  shader config */ )
  .value();
```

**babylon starter**

create a scene from the primitives from `BABYLON`    

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

**three starter**

crée une scène à partir des primitives fournit par `THREE`   

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

**events**

`mesh` `light` `camera` détiennent des évènements qui sont appelés dans des contextes précis `onrender` `onloader` `onresize`

```js
// get textures
starter.mesh.myMeshName.onloader( textures => textures );

// update
starter.mesh.myMeshName.onrender( timer => {
  starter.mesh.myMeshName.rotation.x += time;
  starter.mesh.myMeshName.rotation.y += time;
} );

// resize
starter.mesh.myMeshName.onresize( size => {
  starter.mesh.myMeshName.material.uniforms.resolution.value.x += size.width;
  starter.mesh.myMeshName.rotation.uniforms.resolution.value.y += size.height;
} );
```

## <img src="images/icons/icon-api.svg"/> API

- ### `d2k.onstarter( init )`

  *initialise une `scene` à partir d'un objet `init` passer en paramètre de la méthode `.onstarter`*

  ##### paramètres

  `init` **{ Object }**: initialisation d'un `starter`    
  `returns` **{ Object }**: collection de méthodes.     

  ##### exemple

  ```js
  const starter = d2k
    .onstarter( {
      canvas: 'myCanvasId', // ou document.getElementById( 'myCanvasId' ),
      glsl: false
    } );
  ```

  - ### `.use( RENDERING_ENGINE )`

    *définit un `RENDERING_ENGINE` à partir de la bibliothèque `BABYLON` | `THREE` passer en paramètre de la méthode `.use`*

    ##### paramètres

    `RENDERING_ENGINE` **{ Object }**: la librairie souhaitée `THREE` | `BABYLON`     
    `returns` **{ Object }**: collection de méthodes.     

    ##### exemple

    ```js
    const starter = d2k
      .onstarter( /* init */ )
      .use( BABYLON || THREE );
    ```

  - ### `.withCamera( config )`

    *crée une `camera` à partir d'un objet `config` passer en pamètre de la méthode `.withCamera`*

    ##### paramètres

    `config` **{ Object }**: définition de la config d'une `camera`.  
    `returns` **{ Object }**: collection de méthodes. 

    ##### exemple

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

    *définit un `engine` à partir d'un objet `config` passer en paramètre de la méthode `.withEngine`*
    *nb: cette méthode est disponibl exclusivement pour *

    ##### paramètres

    `RENDERING_ENGINE` **{ Object }**: la librairie souhaitée `THREE` | `BABYLON`     
    `returns` **{ Object }**: collection de méthodes.     

    ##### exemple

    ```js
    const starter = d2k.onstarter( /* init */ )
      .use( BABYLON )
      .withEngine( { name: 'myEngineName' } );
    ```

  - ### `.withMesh( config )`

    *crée un `mesh` à partir d'un objet `config` passer en paramètre de la méthode `.withMesh`*

    ##### paramètres

    `config` **{ Object }**: définition de la config d'un `mesh`  
    `returns` **{ Object }**: collection de méthodes. 

    ##### exemple

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

    *crée une `light` à partir d'un objet `config` passer en paramètre de la méthode `.withLight`*

    ##### paramètres

    `config` **{ Object }**: définition de la config d'une `light`  
    `returns` **{ Object }**: collection de méthodes. 

    ##### exemple

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

    *charge un(e) `texture` `object` à partir d'un objet `config` passer en paramètre de la méthode `.withLoader`*

    ##### paramètres

    `config` **{ Object }**: définition de la config d'un `loader`  
    `returns` **{ Object }**: collection de méthodes. 

    ##### exemple

    ```js
    const starter = d2k.onstarter( /* init */ )
      .use( BABYLON || THREE )
      .withLoader( {
        name: "textures",
        config: {
          args: [ { "name": "img-1", "url": "/my-image-path.jpg" }, { "name": "img-2", "url": "/my-image-pathjpg } ],
          type: "texture"
        }
      } );
    ```

  - ### `.withRenderer( config )`

    *crée un `renderer` à partir d'un objet `config` passer paramètre de la méthode `.withRenderer`*

    ##### paramètres

    `config` **{ Object }**: définition de la config d'un `renderer`  
    `returns` **{ Object }**: collection de méthodes. 

    ##### exemple

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

    ##### paramètres

    `config` **{ Object }**: définition de la config d'une `scene`  
    `returns` **{ Object }**: collection de méthodes. 

    ##### exemple

    ```js
    const starter = d2k.onstarter( /* init */ )
      .use( BABYLON || THREE )
      .withScene( { name: "mySceneName" } );
    ```

  - ### `.withShader( config )`

    *crée des `shader` à partir d'un objet `config` passer en paramètre de la méthode `.withShader`*

    ##### paramètres

    `config` **{ Object }**: définition de la config des `shader`  
    `returns` **{ Object }**: collection de méthodes. 

    ##### exemple

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

  *crée une `scene` à partir d'une `TARGET` et d'une `SOURCE` passer en paramètres de la méthode `.onlayering`. cette méthode va récupérer deux `starter` différents pour les fusionner et afficher les deux scènes a travers un canvas unique. nb: attention, cette partie est encore expérimentale.*   

  ##### paramètres

  `TARGET` **{ Object }**: un starter `THREE` || `BABYLON`
  `SOURCE` **{ Object }**: un starter `BABYLON`
  `returns` **{ Object }**: un `renderer`.   

  ##### exemple

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

  *composition de la scène à afficher. Cette méthode doit t'aider à définir dans quelle scène un mesh doit être affiché.*   

  ##### paramètres

  `config` **{ Object }**: a `THREE` || `BABYLON`
  `SOURCE` **{ Object }**: un starter `BABYLON`
  `returns` **{ Object }**: un `renderer`.   

  ##### exemple

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

  *renvoi un objet `starter` qui contient une collection de primitives. `.value()` peut être appelé à n'importe quel moment de l'étape de création. nb: une fois créé les méthodes de création ne seront plus disponible.*   

  ##### paramètres

  `aucun paramètre`   
  `returns` { Object }: un `starter``.    

  ##### exemple

  ```js
  const starter = d2k
    .onstarter( /* init config */ )
    .value();
  ```

- ### `starter`
  
  *contient l'ensemble de primitives que tu as créé à l'aide des méthodes `.with*`*

## <img src="images/icons/icon-config.svg"/> Configuration

*une `scene` peut être créer à partir d'un fichier `.json` qui devra respecté le format suivant : [.json format](./config/config.format.md)*    

**fetch a config file**

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
    .use( THREE )
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

## <img src="images/icons/icon-reference.svg"/> Références

- [Mr.doob's Code Style™](https://github.com/mrdoob/three.js/wiki/Mr.doob's-Code-Style%E2%84%A2)
- [BabylonJS](http://www.babylonjs.com)
- [three.js](https://threejs.org)

## <img src="images/icons/icon-copyright.svg"/> License

Copyright ©️ 2020 monsieurbadia

Released under the [MIT](https://github.com/monsieurbadia/glsl-reports/blob/master/LICENSE.md) license

## <img src="images/icons/icon-supports.svg"/> Support

*N'hésite pas à mettre une ⭐ si ce projet t'a aidé.*  

## <img src="images/icons/icon-heart.svg"/> Contributeurs

logo - [@mllemartins](https://twitter.com/mllemartins)        
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
