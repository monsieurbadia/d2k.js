<img src="../images/d2k-logo-standard.png"/>

# d2k.js [![NPM Package][npm]][npm-url] [![Build Size][build-size]][build-size-url] [![NPM Downloads][npm-downloads]][npmtrends-url] [![Dev Dependencies][dev-dependencies]][dev-dependencies-url] 

> *micro-bibliothèque javascript basé sur [three.js](https://threejs.org) pour créer des scènes 3d très rapidement à partir d'un objet de configuration ou d'un json*

## Problème

les librairies de moteur de rendu 3d nous offrent un niveau d'abstraction à la webgl très intéressant pour le développement de projet 3d. merci aux personnes qui travaillent sur ces projets, vous êtes dans le turfu ! après avoir créer pas mal de projets avec ces technologies, j'ai remarqué qu'il y avait des récurrences lors de la déclaration d'une scène avant d'avoir un affichage à l'écran. pour en citer quelques uns: scene, camera, renderer, geometry, material, font, loaders, etc. 

## Solution

c'est de mon retour d'expérience que m'est venu l'idée de créé **d2k** avec 2 buts bien distincts en tête: le premier était de déléguer la création des primitives à un poto sûre qui s'en occuperait à ma place pour ensuite me les restituer une fois qu'il sa tâche effectué de cette manière je peux vraiment me concentré sur la composition d'une scène. et enfin la seconde était de pouvoir trouver une façon plus simple de créer une scène afin d'attirer les curieux vers l'univers obscur de la trois dimensions, un monde incroyablement captivant que je vous invite à rejoindre. Et j'espère que que la materia noire **d2k** y sera pour quelque chose. 

## Objectifs

d2K doit être capable de :

- supporter glsl -> pour créer une scène 3d au travers des shaders et du GPU.
- supporter webgl -> pour créer une scène 3d au travers de primitives.
- supporter webgpu -> pour créer une scène 3d au travers du GPU.
- supporter css3d -> pour créer une scène 3d au travers du moteur 3d css.
- supporter three -> pour créer une scène 3d au travers de la librairie three.js
- supporter babylon -> pour créer une scène 3d au travers de la librairie babylon.js
- supporter la superposition -> pour créer une scène 3d au travers de moteur 3d distincts
- supporter json -> pour préparer et configurer nos scènes côté server

## Avertissement

je ne suis pas un développeur, je suis juste un gars normal qui porte la programmation dans son coeur et qui souhaite apporter sa pierre à l'édifice dans le monde de l'open source. Si ce projet peut donner envie à une personne à s'intéresser au webgl. j'aurai contribué à ce que le développement 3d ne meurt jamais. dernier point, actuellement **d2k** support three.js mais à l'avenir il tachera de supporté d'autres librairies afin que chacun puisse utiliser sa bibliothèque préférée. je pense notamment à babylon.js. donc d'autres changements seront à venir pour le bien de tous, je l'espère. 

## Support

engine            | supported | 
------------------|-----------|
css3d             | ❌        |
glsl              | ❌        |
webgl             | ⭕        |
webgpu            | ❌        |

3d engine library | supported |
------------------|-----------|
babylon.js        | ⭕        |
three.js          | ⭕        |

primitive         | babylon | three    |
------------------|---------|----------|
camera            | ⭕      | ⭕       |
effect            | ❌      | ❌       |
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
monitor           | ❌        |
orbit-control     | ❌        |
timer             | ⭕        |
trackball         | ❌        |

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

// babylon
d2k.onstarter()
  .use( BABYLON )
  .withEngine()
  .withScene()
  .withLight()
  .withMesh()
  .value();

// three
window.addEventListener( 'DOMContentLoaded', _ => {

  const canvas = document.getElementById( 'viewRendering' );

  const starter = d2k.onstarter( { canvas } )
    .use( THREE )
    .withCamera( sceneConfig.camera )
    .withMesh( sceneConfig.mesh )
    .withRenderer( sceneConfig.renderer )
    .withLight( sceneConfig.light )
    .withScene( sceneConfig.scene )
    .value();

  const {
    mesh: { current:  mesh },
    scene: { current:  scene }
  } = starter;

  scene.add( mesh );

}, false );

// glsl
d2k.onstarter()
  .use( THREE )
  .withShader()
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
