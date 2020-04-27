<img src="./images/d2k-logo-standard.png" />

# d2k.js [![NPM Package][npm]][npm-url] [![Build Size][build-size]][build-size-url] [![NPM Downloads][npm-downloads]][npmtrends-url] [![Dev Dependencies][dev-dependencies]][dev-dependencies-url] 

> *javascript micro-layer based on [three.js](https://threejs.org) and [babylon.js](https://www.babylonjs.com) to create 3d scenes quickly in an intuitive, elegant and functional way.*

[english](./README.md) - [french](./documentation/documentation.readme.fr.md)   

## Problem

- dry (don't repeat yourself) by implementing the same scenes, cameras, lights, meshes, renderers.
- against the babylon vs three

## Solution

- give the things you do not want to repeat to d2k
- used babyblon and three in a same thing and in the same canvas but you can also used a single rendering engine

## Goals

d2k must :
  - supports json config
  - supports glsl
  - supports babylon.js
  - supports three.js
  - define an abstract that can be easiest to used
  - define the file in which the class is declared
  - define the weight of code lines

[npm]: https://img.shields.io/npm/v/d2k
[npm-url]: https://www.npmjs.com/package/d2k
[build-size]: https://badgen.net/bundlephobia/minzip/d2k
[build-size-url]: https://bundlephobia.com/result?p=d2k
[npm-downloads]: https://img.shields.io/npm/dw/d2k
[npmtrends-url]: https://www.npmtrends.com/d2k
[dev-dependencies]: https://img.shields.io/david/dev/monsieurbadia/d2k.js
[dev-dependencies-url]: https://david-dm.org/monsieurbadia/d2k.js#info=devDependencies
