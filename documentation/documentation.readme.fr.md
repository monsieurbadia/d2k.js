# <img src="../images/d2k-logo-standard.png"/>

# d2k.js <!-- [![NPM Package][npm]][npm-url] [![Build Size][build-size]][build-size-url] [![NPM Downloads][npm-downloads]][npmtrends-url] [![Dev Dependencies][dev-dependencies]][dev-dependencies-url]  -->

> *micro-surcouche javascript basé sur [three.js](https://threejs.org) x [babylon.js](https://www.babylonjs.com) pour créer des scènes 3d de façon intuitive, élégante et flexible.*

## <img src="./icons/icon-problem.svg"/> Problèmes

- implémenter la même chose entre chaque projet (don't repeat yourself).
- manque d'innovation des starter webgl du type `starter-three-de-la-mort-qui-tue`, `babylon-starter-kit`, `react-babylon-starter`, `vue-three-starter++`, etc.
- perdre mon temps pour afficher un simple cube.
- manque de fonctionnalités dans certaines librairies de moteur 3d.
- api webgl trop complexe pour donner envie aux jeunes de s'intéresser à la programmation 3d.
- contre cette guerre "babylon vs three" sur la toile.

## <img src="./icons/icon-solution.svg"/> Solutions

- automatiser la création des primitives.
- automatiser la composition de la scène
- définir une abstraction plus simplifiée.
- donner plus de
- créer une ou plusieurs scène(s) à partir d'un fichier `.json`.
- switcher entre babylon et three en une seule ligne de code.
- créer des expériences expérimentales comme par exemple être capable de faire un `Object.assign( THREE, BABYLON )`, qui donnerait à un canvas unique la possibilité d'afficher les deux scènes en simultané à l'écran.

## <img src="./icons/icon-goals.svg"/> Objectifs

- supporter `GLSL`
- supporter `THREE`
- supporter `BABYLON` 
- supporter `JSON`
- supporter `Object.assign( THREE, BABYLON )`

## <img src="./icons/icon-disclaimer.svg"/> Avertissement

je ne suis pas un développeur, je suis un gars normal qui porte la programmation dans son coeur et souhaite contribuer à l'open source. Pour l'instant, il ne s'agit que d'une version expérimentale d'une idée que j'avais en tête. Mais mon idée va évoluer à travers ce projet donc mes erreurs de conception, avec le temps disparaîtrons. Des changements seront à venir pour le confort de tous, je l'espère. TriForce

## <img src="./icons/icon-installation.svg"/> Installation

Avant de commencer soit sûre d'avoir dans ton projet `three.js` et/ou `babylon.js`. Une fois que c'est bon pour toi, tu peux installer **d2k** via ton terminal.

**terminal**

```sh
npm i d2k
```

OU

```sh
yarn add d2k
```

voilà, le projet est installé. vérifie tout de même dans `.package.json` si il se trouve bien dans les dépendances de ton application.

**alternative**

télécharge le projet, copie le fichier `d2k.js` qui se situe dans le dossier `dist`. Ensuite libre à toi de l'installer dans l'endroit prévu à cet effet dans ton application.

## <img src="./icons/icon-start-project.svg"/> Démarrer le projet

maintenant, tu n'as plus qu'à importer **d2k** dans ton module ou ta page html.

**ecmascript**

```js
import d2k from 'd2k';
```

**html | javascript**

```html
<script src="./d2k.js"></script>
```

## <img src="./icons/icon-syntax.svg"/> Syntaxe

Voici un aperçu de la syntaxe de **d2k**.

**glsl starter**

crée une scène au travers des shaders en `glsl`.

```js
const GLSLstarter = d2k.onstarter( { glsl: true } )
  .use( THREE ) // <-- use three and enable glsl shader
  .withShader()
  .value();
```

**babylon starter**

crée une scène à partir des primitives provenant de `babylon.js`.

```js
const BABYLONstarter = d2k.onstarter()
  .use( BABYLON ) // <-- use babylon
  .withEngine()
  .withScene()
  .withLight()
  .withMesh()
  .value();
```

**three starter**

crée une scène à partir des primitives fournit par `three.js`.
```js
const THREEstarter = d2k.onstarter()
  .use( THREE ) // <-- use three
  .withCamera()
  .withMesh()
  .withRenderer()
  .withLight()
  .withScene()
  .value();
```

## <img src="./icons/icon-api.svg"/> API

- ### <a name="onstarter"></a>[`d2k.onstarter( init )`](https://github.com/monsieurbadia/d2k.js/blob/master/src/starter/starter.js)

  *initialize a scene from a init object.*

  ##### params

  `init` **{ Object }**: global settings.
  `returns` **{ Object }**: collection of methods. 

  ##### example

  ```js
  d2k.onstarter( {
    canvas: document.getElementById( 'myCanvasId' ),
    glsl: false
  } );
  ```

  - ### `.withCamera( config )`

    *create a camera from a config object.*

    ##### params

    `config` **{ Object }**: camera config.  
    `returns` **{ Object }**: collection of methods. 

    ##### example

    ```js
    const starter = d2k.onstarter( /* init */ )
      .withCamera( {
        name: 'myCameraName',
        config: {
          args: [ 75, window.innerWidth / window.innerHeight, 0.1, 1000 ],
          position: [ 0, 0, 100 ],
          type: "perspective"
      } );
    ```

## <img src="./icons/icon-primitive.svg"/> Primitives

primitive         | babylon | three    |
------------------|---------|----------|
audio             | ❌      | ❌       |
camera            | ⭕      | ⭕       |
font              | ❌      | ❌       |
geometry          | ❌      | ⭕       |
group             | ❌      | ⭕       |
light             | ⭕      | ⭕       |
loader            | ❌      | ⭕       |
material          | ⭕      | ⭕       |
mesh              | ⭕      | ⭕       |
renderer          | ⭕      | ⭕       |
scene             | ⭕      | ⭕       |

## <img src="./icons/icon-supports.svg"/> Supports

*⭐️ this repository if this project helped you!*  

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
