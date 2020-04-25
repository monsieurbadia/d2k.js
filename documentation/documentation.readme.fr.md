<img src="../images/d2k-logo-standard.png"/>

# d2k.js [![NPM Package][npm]][npm-url] [![Build Size][build-size]][build-size-url] [![NPM Downloads][npm-downloads]][npmtrends-url] [![Dev Dependencies][dev-dependencies]][dev-dependencies-url] 

> *micro-bibliothèque javascript basé sur [three.js](https://threejs.org) pour créer des scènes 3d très rapidement à partir d'un objet de configuration ou d'un json*

# Problem

- dry (don't repeat yourself) by implementing the same scenes, cameras, lights, meshes, renderers.
- against the babylon vs three

# Solution

## Goal

d2k must :
  - supports json config
  - supports glsl
  - supports babylon.js
  - supports three.js
  - define an abstract that can be easiest to used

## Objectifs

d2K doit :

- supporter glsl
- supporter three
- supporter babylon 
- supporter json
- supporter l'insertion d'une scène 3d dans un canvas existant

## Avertissement

je ne suis pas un développeur, je suis juste un gars normal qui porte la programmation dans son coeur et qui souhaite apporter sa pierre à l'édifice dans le monde de l'open source. Si ce projet peut donner envie à une personne à s'intéresser au webgl. j'aurai contribué à ce que le développement 3d ne meurt jamais. dernier point, actuellement **d2k** support three.js mais à l'avenir il tachera de supporté d'autres librairies afin que chacun puisse utiliser sa bibliothèque préférée. je pense notamment à babylon.js. donc d'autres changements seront à venir pour le bien de tous, je l'espère. 

## Support

engine            | supported | 
------------------|-----------|
glsl              | ⭕        |
webgl             | ⭕        |

3d engine library | supported |
------------------|-----------|
babylon.js        | ⭕        |
three.js          | ⭕        |
both              | ⭕        |

primitive         | babylon | three    |
------------------|---------|----------|
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

feature           | supported | 
------------------|-----------|
mouse             | ❌        |
timer             | ⭕        |


## Installation

avant de commencer, il va falloir installer le projet.

```sh
npm i d2k
```

OU

```sh
yarn add d2k
```

voilà, le projet est installer. vérifie tout de même qu'il se trouve bien dans les dépendances de ton application.

**alternative**

si tu n'es pas à l'aise avec les lignes de commandes, tu peux aussi télécharger le projet. Ensuite, copie le fichier `d2k.js` qui se situe dans le dossier `dist`. Libre à toi de l'installer dans l'endroit prévu à cet effet dans ton application.

## Démarrer le projet

une fois que ton installation est faite, il te reste plus qu'un importer la librairie dans ton script ou ta page html comme ceci.

```js
import d2k from 'd2k';

console.log( d2k ); // voilà, je te présente d2k ton nouveau gars sûre.
```

```html
<script src="./d2k.js"></script>

<script>
console.log( d2k ); // voilà, je te présente d2k ton nouveau gars sûre.
</script>
```

## Demo

```js
// syntax
d2k.onstarter()
  .use()
  .withEngine()
  .withScene()
  .withLight()
  .withMesh()
  .value();

// glsl
d2k.onstarter()
  .use( THREE )
  .withShader()
  .value();

// babylon
d2k.onstarter()
  .use( BABYLON )
  .withEngine()
  .withScene()
  .withLight()
  .withMesh()
  .value();

// three
const starter = d2k.onstarter( { canvas } )
  .use( THREE )
  .withCamera( sceneConfig.camera )
  .withMesh( sceneConfig.mesh )
  .withRenderer( sceneConfig.renderer )
  .withLight( sceneConfig.light )
  .withScene( sceneConfig.scene )
  .value();
```

## API

## Todo

- [ ] json support
- [x] webgl support
- [x] d2k must to be able to do layering between both renderers
- [ ] webgpu support
- [ ] glsl support
- [ ] css3d support
- [ ] three font loader support
- [x] babylon.js support
- [x] three.js support 

[npm]: https://img.shields.io/npm/v/d2k
[npm-url]: https://www.npmjs.com/package/d2k
[build-size]: https://badgen.net/bundlephobia/minzip/d2k
[build-size-url]: https://bundlephobia.com/result?p=d2k
[npm-downloads]: https://img.shields.io/npm/dw/d2k
[npmtrends-url]: https://www.npmtrends.com/d2k
[dev-dependencies]: https://img.shields.io/david/dev/monsieurbadia/d2k.js
[dev-dependencies-url]: https://david-dm.org/monsieurbadia/d2k.js#info=devDependencies
