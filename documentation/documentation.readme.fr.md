<img src="../images/d2k-logo-standard.png"/>

# d2k.js <!-- [![NPM Package][npm]][npm-url] [![Build Size][build-size]][build-size-url] [![NPM Downloads][npm-downloads]][npmtrends-url] [![Dev Dependencies][dev-dependencies]][dev-dependencies-url]  -->

> *micro-surcouche javascript basé sur [three.js](https://threejs.org) x [babylon.js](https://www.babylonjs.com) pour créer des scènes 3d de façon intuitive, élégante et flexible.*

## <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="35" viewBox="0 -10 100 100"><polygon points="20,80 36.2,80 36.2,63.8 31,63.8 31,74.7 25.3,74.7 25.3,47.2 52.8,47.2 52.8,69 69,69 69,63.8 58.1,63.8  58.1,47.2 69,47.2 69,41.9 25.3,41.9 25.3,25.3 41.9,25.3 41.9,31 31,31 31,36.2 47.2,36.2 47.2,25.3 58.1,25.3 58.1,20 20,20"/><polygon points="80,80 80,20 63.8,20 63.8,31 52.8,31 52.8,36.2 69,36.2 69,25.3 74.7,25.3 74.7,52.8 63.8,52.8 63.8,58.1 74.7,58.1 74.7,74.7 47.2,74.7 47.2,52.8 31,52.8 31,58.1 41.9,58.1 41.9,80"/><polygon points="85.7,85.7 14.3,85.7 14.3,52.8 2.5,52.8 2.5,58.1 9.1,58.1 9.1,90.9 90.9,90.9 90.9,58.1 97.5,58.1 97.5,52.8 85.7,52.8"/><polygon points="90.9,41.9 90.9,9.1 9.1,9.1 9.1,41.9 2.5,41.9 2.5,47.2 14.3,47.2 14.3,14.3 85.7,14.3 85.7,47.2 97.5,47.2 97.5,41.9"/></svg> Problèmes

- implémenter la même chose entre chaque projet (don't repeat yourself).
- manque d'innovation des starter webgl du type `starter-three-de-la-mort-qui-tue`, `babylon-starter-kit`, `react-babylon-starter`, `vue-three-starter++`, etc.
- perdre mon temps pour afficher un simple cube.
- manque de fonctionnalités dans certaines librairies de moteur 3d.
- api webgl trop complexe pour donner envie aux jeunes de s'intéresser à la programmation 3d.
- contre cette guerre "babylon vs three" sur la toile.

## <svg xmlns="http://www.w3.org/2000/svg" width="40" x="0px" y="0px" viewBox="0 -15 100 100"><polygon points="35.9,27.2 30.9,27.2 30.9,47.5 15.7,47.5 15.7,32.3 20.7,32.3 20.7,42.4 25.8,42.4 25.8,27.2 15.7,27.2 15.7,22.1 41,22.1 41,32.3 46.1,32.3 46.1,22.1 71.4,22.1 71.4,27.2 51.1,27.2 51.1,32.3 76.5,32.3 76.5,17.1 10.6,17.1 10.6,52.5 35.9,52.5"/><polygon points="51.1,52.5 71.4,52.5 71.4,57.6 51.1,57.6 51.1,62.7 61.3,62.7 61.3,72.8 66.3,72.8 66.3,62.7 71.4,62.7 71.4,77.9 56.2,77.9 56.2,67.7 20.7,67.7 20.7,72.8 51.1,72.8 51.1,77.9 15.7,77.9 15.7,67.7 10.6,67.7 10.6,82.9 76.5,82.9 76.5,47.5 51.1,47.5"/><polygon points="97.5,39.9 81.5,28.9 81.5,37.4 41,37.4 41,57.6 2.5,57.6 2.5,62.7 46.1,62.7 46.1,42.4 81.5,42.4 81.5,50.9"/></svg> Solutions

- automatiser la création des primitives.
- automatiser la composition de la scène
- définir une abstraction plus simplifiée.
- donner plus de
- créer une ou plusieurs scène(s) à partir d'un fichier `.json`.
- switcher entre babylon et three en une seule ligne de code.
- créer des expériences expérimentales comme par exemple être capable de faire un `Object.assign( THREE, BABYLON )`, qui donnerait à un canvas unique la possibilité d'afficher les deux scènes en simultané à l'écran.

## <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="30" viewBox="0 -5 100 100"><circle cx="50" cy="50" r="12"/><path d="M93.3,45.8h-4.9c-2-17.9-16.2-32.2-34.1-34.1V6.7c0-2.3-1.9-4.2-4.2-4.2c-2.3,0-4.2,1.9-4.2,4.2v4.9 c-17.9,2-32.2,16.2-34.1,34.1H6.7c-2.3,0-4.2,1.9-4.2,4.2c0,2.3,1.9,4.2,4.2,4.2h4.9c2,17.9,16.2,32.2,34.1,34.1v4.9 c0,2.3,1.9,4.2,4.2,4.2c2.3,0,4.2-1.9,4.2-4.2v-4.9c17.9-2,32.2-16.2,34.1-34.1h4.9c2.3,0,4.2-1.9,4.2-4.2 C97.5,47.7,95.6,45.8,93.3,45.8z M54.2,79.8v-4.3c0-2.3-1.9-4.2-4.2-4.2c-2.3,0-4.2,1.9-4.2,4.2v4.3 c-13.2-1.9-23.7-12.3-25.6-25.6h4.3c2.3,0,4.2-1.9,4.2-4.2c0-2.3-1.9-4.2-4.2-4.2h-4.3c1.9-13.2,12.3-23.7,25.6-25.6v4.3 c0,2.3,1.9,4.2,4.2,4.2c2.3,0,4.2-1.9,4.2-4.2v-4.3c13.2,1.9,23.7,12.3,25.6,25.6h-4.3c-2.3,0-4.2,1.9-4.2,4.2 c0,2.3,1.9,4.2,4.2,4.2h4.3C77.9,67.5,67.5,77.9,54.2,79.8z"/></svg> Objectifs

- supporter `GLSL`
- supporter `THREE`
- supporter `BABYLON` 
- supporter `JSON`
- supporter `Object.assign( THREE, BABYLON )`

## <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" width="30" viewBox="0 -5 100 100"><path d="M96.9,85L53.8,10.6c-1.7-2.9-5.8-2.9-7.5,0L3.1,85c-1.7,2.9,0.4,6.5,3.8,6.5h86.3C96.5,91.6,98.6,87.9,96.9,85z M46,31.3 c0-2.2,1.8-4,4-4s4,1.8,4,4v28.5c0,2.2-1.8,4-4,4s-4-1.8-4-4V31.3z M50,81.2c-3.2,0-5.8-2.6-5.8-5.8c0-3.2,2.6-5.8,5.8-5.8 s5.8,2.6,5.8,5.8C55.8,78.6,53.2,81.2,50,81.2z"/></svg> Avertissement

je ne suis pas un développeur, je suis un gars normal qui porte la programmation dans son coeur et souhaite contribuer à l'open source. Pour l'instant, il ne s'agit que d'une version expérimentale d'une idée que j'avais en tête. Mais mon idée va évoluer à travers ce projet donc mes erreurs de conception, avec le temps disparaîtrons. Des changements seront à venir pour le confort de tous, je l'espère. TriForce

## <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" viewBox="0 -10 100 100"><path d="M94.3,69.4l-4.7-14c-1.4-4.2-4.7-7.4-8.9-8.8l-12.5-4c2.1-3.3,3.4-7.3,3.4-11.5c0-0.1,0-0.1,0-0.2 c6.8-1.7,11.1-4.1,11.1-6.9c0-2.9-5-5.5-12.7-7.2l-2.5-9.9c-0.8-3.3-4.3-5.2-7.4-4.1l-8.3,2.7c-1.2,0.4-2.5,0.4-3.6,0l-8.3-2.7 c-3.2-1.1-6.6,0.9-7.4,4.1L30,16.8c-7.7,1.7-12.7,4.3-12.7,7.2c0,2.7,4.3,5.2,11.1,6.9c0,0.1,0,0.1,0,0.2c0,4.3,1.3,8.2,3.4,11.5 l-12.5,4c-4.2,1.4-7.5,4.6-8.9,8.8l-4.7,14c-2,5.9,1.5,12.3,7.7,13.6l7.7,1.7l-3.3-19.4c-0.4-2.5,0.3-5,1.9-6.9 c1.6-1.9,4-3,6.5-3h47.9c2.5,0,4.9,1.1,6.5,3c1.6,1.9,2.3,4.4,1.9,6.9L79,84.8l7.7-1.7C92.8,81.7,96.3,75.3,94.3,69.4z M50,47.1 c-8.6,0-15.6-6.7-16-15.1c4.7,0.8,10.2,1.2,16,1.2c5.8,0,11.3-0.4,16-1.2C65.6,40.4,58.6,47.1,50,47.1z"/><path d="M73.9,60.9H26.1c-1.9,0-3.3,1.7-3,3.5L28.2,95c0.2,1.5,1.5,2.5,3,2.5h37.6c1.5,0,2.7-1.1,3-2.5l5.1-30.5 C77.2,62.6,75.8,60.9,73.9,60.9z M50,82.9c-2.1,0-3.7-1.7-3.7-3.7c0-2.1,1.7-3.7,3.7-3.7c2.1,0,3.7,1.7,3.7,3.7 C53.7,81.3,52.1,82.9,50,82.9z"/></svg> Installation

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

## <svg xmlns="http://www.w3.org/2000/svg" width="40" version="1.1" x="0px" y="0px" viewBox="0 -30 100 125" x="0" y="0"><path d="M95.7,79.9H59.4c-0.2,0-0.4,0.2-0.4,0.4v1.4c0,0.9-0.7,1.6-1.6,1.6H41.6c-0.9,0-1.7-0.8-1.7-1.7v-1.4 c0-0.2-0.2-0.4-0.4-0.4H3.1c-0.3,0-0.6,0.3-0.6,0.6v6c0,2.9,2.3,5.2,5.2,5.2h83.4c2.9,0,5.2-2.3,5.2-5.2v-6 C96.3,80.2,96,79.9,95.7,79.9z"/><path d="M14.3,75.6h70.2c2.5,0,4.6-2,4.6-4.6V50.4l-4.4,3.8c-1.2,1-2.7,1.5-4.2,1.5c-0.2,0-0.3,0-0.5,0v10.7H18.9V27.1 c0-0.5,0.4-0.9,0.9-0.9h30.3c-0.2-1.8,0.3-3.7,1.5-5.1l3.4-4H19.8c-5.5,0-10,4.5-10,10V71C9.7,73.5,11.8,75.6,14.3,75.6z"/><path d="M56.1,26.8l6,2.2c-1.7,2.7-2.8,5.1-3.5,6.6c-0.5,1.1-0.3,2.3,0.6,3.1l8,8c0.8,0.8,2.1,1,3.1,0.6c1.5-0.7,3.8-1.8,6.6-3.5 l2.2,6c0.4,1,1.6,1.3,2.4,0.6l5.6-4.8c2.4-2.1,3.3-5.4,2.2-8.5l-1-2.7c7.6-8.6,9.5-20.9,9.3-24.6c0-0.4-0.2-0.8-0.4-1 c-0.3-0.3-0.6-0.4-1-0.4C92.3,8.1,80,10,71.4,17.6l-2.7-1c-3-1.1-6.4-0.2-8.5,2.2l-4.8,5.6C54.8,25.2,55.1,26.4,56.1,26.8z M78.2,20.9c1.8-1.8,4.8-1.8,6.6,0c1.8,1.8,1.8,4.8,0,6.6c-1.8,1.8-4.8,1.8-6.6,0C76.4,25.7,76.4,22.8,78.2,20.9z"/><path d="M50.9,56.2c0.1,0.8,1,1.1,1.6,0.6c1.9-1.5,4.4-1.7,7-2.2c1.9-0.4,5-2.1,5.7-4.9c-0.2-0.2-0.4-0.3-0.6-0.5l-1.9-1.9 c-0.5,0.8-1.5,1.3-2.1,1.4c-1.1,0.2-2.2,0.3-3,1c-0.3,0.2-0.6,0.1-0.7-0.3c-0.2-1,0.1-2,0.5-2.7c-0.2,0-0.4,0-0.5,0.1 c-0.4,0.2-0.7-0.1-0.6-0.5c0.3-1.1,1-2.6,2.2-3.3l-1.9-1.9c-0.1-0.1-0.2-0.2-0.3-0.4c-3.7,0.8-6.1,5.2-6.9,8.2 c-0.2,0.9,0.7,1.5,1.5,1.1c0.4-0.2,0.8-0.3,1.3-0.3C51.2,51.4,50.5,53.9,50.9,56.2z"/></svg> Démarrer le projet

maintenant, tu n'as plus qu'à importer **d2k** dans ton module ou ta page html.

**ecmascript**

```js
import d2k from 'd2k';
```

**html | javascript**

```html
<script src="./d2k.js"></script>
```

## <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" viewBox="0 -25 100 100"><path d="M62.9,29.2L47,71.9c-0.2,0.6-0.8,1-1.5,1h-7c-1.1,0-1.9-1.1-1.5-2.2L53,28.1c0.2-0.6,0.8-1,1.5-1h7 C62.6,27.1,63.3,28.2,62.9,29.2z"/><path d="M24.8,73L3,51.1c-0.6-0.6-0.6-1.7,0-2.3L24.8,27c0.6-0.6,1.6-0.6,2.3,0l4.6,4.6c0.6,0.6,0.6,1.6,0,2.3L15.6,50l16.1,16.1 c0.6,0.6,0.6,1.6,0,2.3L27.1,73C26.5,73.6,25.5,73.6,24.8,73z"/><path d="M72.9,73l-4.6-4.6c-0.6-0.6-0.6-1.6,0-2.3L84.4,50L68.3,33.9c-0.6-0.6-0.6-1.6,0-2.3l4.6-4.6c0.6-0.6,1.6-0.6,2.3,0 L97,48.9c0.6,0.6,0.6,1.7,0,2.3L75.2,73C74.5,73.6,73.5,73.6,72.9,73z"/></svg> Syntaxe

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

## <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" viewBox="0 0 100 100"><path d="M94.2,41.2L82.3,40c-0.4,0-0.8-0.3-0.9-0.7c-0.5-1.3-1-2.6-1.6-3.9c-0.2-0.4-0.1-0.8,0.1-1.2l7.5-9.2 c1.2-1.5,1.1-3.6-0.3-5L80,12.8c-1.3-1.3-3.5-1.5-5-0.3l-9.2,7.5c-0.3,0.3-0.8,0.3-1.2,0.1c-1.3-0.6-2.5-1.2-3.9-1.6 c-0.4-0.1-0.7-0.5-0.7-0.9L58.8,5.8c-0.2-1.9-1.8-3.3-3.7-3.3H44.9c-1.9,0-3.5,1.4-3.7,3.3L40,17.7c0,0.4-0.3,0.8-0.7,0.9 c-1.3,0.5-2.6,1-3.9,1.6c-0.4,0.2-0.8,0.1-1.2-0.1L25,12.6c-1.5-1.2-3.6-1.1-5,0.3L12.8,20c-1.3,1.3-1.5,3.5-0.3,5l7.5,9.2 c0.3,0.3,0.3,0.8,0.1,1.2c-0.6,1.3-1.2,2.5-1.6,3.9c-0.1,0.4-0.5,0.7-0.9,0.7L5.8,41.2c-1.9,0.2-3.3,1.8-3.3,3.7v10.2 c0,1.9,1.4,3.5,3.3,3.7L17.7,60c0.4,0,0.8,0.3,0.9,0.7c0.5,1.3,1,2.6,1.6,3.9c0.2,0.4,0.1,0.8-0.1,1.2L12.6,75 c-1.2,1.5-1.1,3.6,0.3,5l7.2,7.2c1.3,1.3,3.5,1.5,5,0.3l9.2-7.5c0.3-0.3,0.8-0.3,1.2-0.1c1.3,0.6,2.5,1.2,3.9,1.6 c0.4,0.1,0.7,0.5,0.7,0.9l1.2,11.8c0.2,1.9,1.8,3.3,3.7,3.3h10.2c1.9,0,3.5-1.4,3.7-3.3L60,82.3c0-0.4,0.3-0.8,0.7-0.9 c1.3-0.5,2.6-1,3.9-1.6c0.4-0.2,0.8-0.1,1.2,0.1l9.2,7.5c1.5,1.2,3.6,1.1,5-0.3l7.2-7.2c1.3-1.3,1.5-3.5,0.3-5l-7.5-9.2 c-0.3-0.3-0.3-0.8-0.1-1.2c0.6-1.3,1.2-2.5,1.6-3.9c0.1-0.4,0.5-0.7,0.9-0.7l11.8-1.2c1.9-0.2,3.3-1.8,3.3-3.7V44.9 C97.5,43,96.1,41.4,94.2,41.2z M39.8,57.6c0.6,0.6,0.5,1.5-0.1,2.1l-2.2,2.1c-0.3,0.3-0.6,0.4-1,0.4c0,0,0,0,0,0 c-0.4,0-0.8-0.2-1-0.5L25.3,51c-0.5-0.6-0.5-1.5,0-2l10.1-10.7c0.3-0.3,0.6-0.5,1-0.5c0,0,0,0,0,0c0.4,0,0.7,0.1,1,0.4l2.2,2.1 c0.6,0.6,0.6,1.5,0.1,2.1L32.6,50L39.8,57.6z M56,38.8l-6.1,24c-0.1,0.4-0.3,0.7-0.7,0.9c-0.2,0.1-0.5,0.2-0.8,0.2 c-0.1,0-0.2,0-0.4,0l-3-0.8c-0.4-0.1-0.7-0.3-0.9-0.7C44,62,43.9,61.6,44,61.2l6.1-24c0.1-0.4,0.3-0.7,0.7-0.9s0.8-0.3,1.1-0.2 l3,0.8C55.7,37.1,56.2,38,56,38.8z M74.7,51L64.6,61.7c-0.3,0.3-0.6,0.5-1,0.5c0,0,0,0,0,0c-0.4,0-0.7-0.1-1-0.4l-2.2-2.1 c-0.3-0.3-0.5-0.6-0.5-1c0-0.4,0.1-0.8,0.4-1.1l7.1-7.6l-7.1-7.6c-0.3-0.3-0.4-0.7-0.4-1.1c0-0.4,0.2-0.8,0.5-1l2.2-2.1 c0.6-0.6,1.5-0.5,2.1,0.1L74.7,49C75.3,49.5,75.3,50.4,74.7,51z"/></svg> API

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

## <svg version="1.1" x="0px" y="0px" width="40" viewBox="-950 930 100 120"><g><polygon points="-896.6,989.8 -896.6,1048.5 -851.8,1031.2 -851.8,972.6"/><polygon points="-946.2,1031.2 -901.4,1048.5 -901.4,989.8 -946.2,972.6"/><polygon points="-899,953.5 -941.8,969.2 -899,985.6 -856.2,969.2"/></g></svg> Primitives

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

## <svg x="0px" y="0px" width="40" viewBox="0 0 100 100"><path d="M5273.1,2400.1v-2c0-2.8-5-4-9.7-4s-9.7,1.3-9.7,4v2c0,1.8,0.7,3.6,2,4.9l5,4.9c0.3,0.3,0.4,0.6,0.4,1v6.4 c0,0.4,0.2,0.7,0.6,0.8l2.9,0.9c0.5,0.1,1-0.2,1-0.8v-7.2c0-0.4,0.2-0.7,0.4-1l5.1-5C5272.4,2403.7,5273.1,2401.9,5273.1,2400.1z M5263.4,2400c-4.8,0-7.4-1.3-7.5-1.8v0c0.1-0.5,2.7-1.8,7.5-1.8c4.8,0,7.3,1.3,7.5,1.8C5270.7,2398.7,5268.2,2400,5263.4,2400z"/><path d="M5268.4,2410.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1c0-0.6-0.4-1-1-1H5268.4z"/><path d="M5272.7,2413.7h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2414.1,5273.3,2413.7,5272.7,2413.7z"/><path d="M5272.7,2417h-4.3c-0.6,0-1,0.4-1,1c0,0.6,0.4,1,1,1h4.3c0.6,0,1-0.4,1-1C5273.7,2417.5,5273.3,2417,5272.7,2417z"/><path d="M53.7,13.1V6.2c0-2.1-1.7-3.7-3.7-3.7c-2.1,0-3.7,1.7-3.7,3.7v6.9c0,2.1,1.7,3.7,3.7,3.7C52.1,16.9,53.7,15.2,53.7,13.1z"/><path d="M34.7,18.2c0.7,1.2,1.9,1.9,3.2,1.9c0.7,0,1.3-0.2,1.9-0.5c1.8-1,2.4-3.3,1.4-5.1l-3.4-6c-1-1.8-3.3-2.4-5.1-1.4 c-0.9,0.5-1.5,1.3-1.7,2.3c-0.3,1-0.1,2,0.4,2.8L34.7,18.2z"/><path d="M60.2,19.6c0.6,0.3,1.2,0.5,1.9,0.5c1.3,0,2.6-0.7,3.2-1.9l3.4-6c0.5-0.9,0.6-1.9,0.4-2.8c-0.3-1-0.9-1.8-1.7-2.3 c-1.8-1-4.1-0.4-5.1,1.4l-3.4,6C57.8,16.2,58.4,18.5,60.2,19.6z"/><path d="M9.7,80.9c-0.8,0.5-1,1.6-0.4,2.4l9.4,13.5c0.5,0.8,1.6,1,2.4,0.4l7.2-5L16.9,75.9L9.7,80.9z"/><path d="M43.4,23.8c-1.1,0-2.2,0.5-2.9,1.4l-19.4,23c-1.8,2.2-2.8,5-2.6,7.8l0.9,16.3l11.9,17.1l12.2-15.6 c1.3-1.7,2.1-3.8,2.1-5.9l0.1-19.3c0-0.9-0.4-1.8-1-2.4c-0.7-0.6-1.5-1-2.4-1c-1.6,0-2.9,1.1-3.3,2.6l-0.2,0.8 c-1,4.1-1.7,8.4-2.1,12.6l-0.3,3.7c-0.1,1.1-1.1,2-2.2,1.9c-1.1-0.1-2-1.1-1.9-2.2l0.3-3.7c0.3-4.5,1.1-9,2.2-13.3l0.2-0.8 c0.8-3.3,3.8-5.6,7.2-5.7c0.3,0,0.6,0,0.9,0l4.2-11.9c0.5-1.4,0.2-3-0.9-4.1C45.6,24.2,44.6,23.8,43.4,23.8z"/><path d="M90.3,80.9l-7.2-5L71.8,92.2l7.2,5c0.8,0.5,1.8,0.3,2.4-0.4l9.4-13.5C91.3,82.5,91.1,81.4,90.3,80.9z"/><path d="M81.5,56.1c0.2-2.9-0.8-5.6-2.6-7.8l-19.4-23c-0.7-0.9-1.8-1.4-2.9-1.4c-1.1,0-2.2,0.4-3,1.2c-1.1,1.1-1.4,2.7-0.9,4.1 l4.2,11.9c0.3,0,0.6,0,0.9,0c3.4,0,6.4,2.4,7.2,5.7l0.2,0.8c1.1,4.4,1.8,8.8,2.2,13.3l0.3,3.7c0.1,1.1-0.8,2.1-1.9,2.2 c-1.1,0.1-2.1-0.8-2.2-1.9l-0.3-3.7c-0.3-4.2-1-8.5-2.1-12.6L61,47.7c-0.4-1.5-1.7-2.6-3.3-2.6c-0.9,0-1.8,0.3-2.4,1 c-0.6,0.6-1,1.5-1,2.4l0.1,19.3c0,2.1,0.7,4.3,2.1,5.9l12.2,15.6l11.9-17.1L81.5,56.1z"/></svg> Supports

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
