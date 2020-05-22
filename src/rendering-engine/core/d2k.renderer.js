import { fail } from 'u3s';
import { Archetype } from './d2k.archetype';
import { Matrix4 } from '../math/d2k.matrix4';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

const vshaderSource = `
  // # λ <• /* TODO: including */ •>
  
  attribute vec4 position;
  attribute vec4 color;
  attribute vec2 texture2d;

  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  uniform vec2 sampler2d;

  varying vec4 vColor;
  varying vec2 vTexture;

  void main(void) {
    gl_Position = projectionMatrix * modelViewMatrix * position;
    vColor = color;
    vTexture = texture2d;
  }
`;

const fshaderSource = `
  #ifdef GL_ES
  precision highp float;
  #endif

  varying vec4 vColor;

  void main(void) {

    gl_FragColor = vColor;
  }
`;

const createConstructor = ( {
  alpha = false,
  antialias = true,
  autoClear = true,
  canvas = document.createElement( 'canvas' ),
  width = 200,
  height = 200,
  dpr = window.devicePixelRatio
} = {} ) => instance => {

  instance.canvas = canvas;
  instance.autoClear = autoClear;
  instance.gl = canvas.getContext( 'webgl', { alpha, antialias } );
  instance.program = null;
  instance.width = width;
  instance.height = height;
  instance.modelViewMatrix = new Matrix4();
  instance.dpr = dpr;

  return instance;

};

var radian = 0.0;

const createPrototype = instance => {

  instance.onrender = ( { scene, camera } ) => {
    
    let object3d;

    instance.gl.clear( instance.gl.COLOR_BUFFER_BIT | instance.gl.DEPTH_BUFFER_BIT );

    for ( let i = 0; i < scene.children.length; i++ ) {
  
      object3d = scene.children[ i ];

      if ( object3d ) {

        if ( !object3d.__positionBuffer ) object3d.__positionBuffer = instance.gl.createBuffer();
        instance.gl.bindBuffer( instance.gl.ARRAY_BUFFER, object3d.__positionBuffer );
        instance.gl.bufferData( instance.gl.ARRAY_BUFFER, new Float32Array( object3d.positions ), instance.gl.STATIC_DRAW );
  
        if ( !object3d.__colorBuffer ) object3d.__colorBuffer = instance.gl.createBuffer();
        instance.gl.bindBuffer( instance.gl.ARRAY_BUFFER, object3d.__colorBuffer );
        instance.gl.bufferData( instance.gl.ARRAY_BUFFER, new Float32Array( object3d.colors ), instance.gl.STATIC_DRAW );
  
        if ( !object3d.__indexBuffer ) object3d.__indexBuffer = instance.gl.createBuffer();
        instance.gl.bindBuffer( instance.gl.ELEMENT_ARRAY_BUFFER, object3d.__indexBuffer );
        instance.gl.bufferData( instance.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array( object3d.indices ), instance.gl.STATIC_DRAW );
  
        instance.setupMatrices( { object3d: null, camera } );
  
        instance.gl.bindBuffer( instance.gl.ARRAY_BUFFER, object3d.__positionBuffer );
        instance.gl.vertexAttribPointer( instance.program.position, 3, instance.gl.FLOAT, false, 0, 0 );
        instance.gl.enableVertexAttribArray( instance.program.position );
  
        instance.gl.bindBuffer( instance.gl.ARRAY_BUFFER, object3d.__colorBuffer );
        instance.gl.vertexAttribPointer( instance.program.color, 4, instance.gl.FLOAT, false, 0, 0 );
        instance.gl.enableVertexAttribArray( instance.program.color );
      
        instance.gl.bindBuffer( instance.gl.ELEMENT_ARRAY_BUFFER, object3d.__indexBuffer );
        instance.gl.uniformMatrix4fv( instance.program.projectionMatrix, false, camera.projectionMatrix.value );
        instance.gl.uniformMatrix4fv( instance.program.modelViewMatrix, false, camera.modelViewMatrix.value );

      }

    }
  
    instance.gl.drawElements( instance.gl.TRIANGLES, object3d.indices.length, instance.gl.UNSIGNED_SHORT, 0 );

    radian += Math.PI / 180;

    return instance;

  };

  instance.initGL = _ => {

    instance.gl.clearColor( 0.0, 0.0, 0.0, 1.0 );
    instance.gl.clearDepth( 1.0 );
    instance.gl.enable( instance.gl.DEPTH_TEST );
    instance.gl.depthFunc( instance.gl.LEQUAL ); 
    instance.gl.clear( instance.gl.COLOR_BUFFER_BIT | instance.gl.DEPTH_BUFFER_BIT );

    return instance;

  };

  instance.initProgram = _ => {

    instance.program = instance.gl.createProgram();

    instance.gl.attachShader( instance.program, getShader( { gl: instance.gl, type: 'fragment', codeSource: fshaderSource } ) );
    instance.gl.attachShader( instance.program, getShader( { gl: instance.gl, type: 'vertex', codeSource: vshaderSource } ) );
		instance.gl.linkProgram( instance.program );

		if ( !instance.gl.getProgramParameter( instance.program, instance.gl.LINK_STATUS ) ) {

			fail.warning = `Could not initialise shaders, ${ gl.getProgramInfoLog( instance.program ) }`;

		}

    instance.gl.useProgram( instance.program );

		instance.program.modelViewMatrix = instance.gl.getUniformLocation( instance.program, 'modelViewMatrix' );
    instance.program.projectionMatrix = instance.gl.getUniformLocation( instance.program, 'projectionMatrix' );
    instance.program.normalMatrix = instance.gl.getUniformLocation( instance.program, 'normalMatrix' );

    instance.program.position = instance.gl.getAttribLocation( instance.program, 'position' );
    instance.gl.enableVertexAttribArray( instance.program.position );

    instance.program.color = instance.gl.getAttribLocation( instance.program, 'color' );
    instance.gl.enableVertexAttribArray( instance.program.color );

		instance.program.viewMatrixArray = new Float32Array( 16 );
		instance.program.modelViewMatrixArray = new Float32Array( 16 );
    instance.program.projectionMatrixArray = new Float32Array( 16 );

    return instance;

  };

  instance.resize = _ => {

    instance.setSize();
    instance.gl.viewport( 0, 0, instance.canvas.width, instance.canvas.height );

    return instance;

  };

  instance.setSize = ( { width = window.innerWidth, height = window.innerHeight } = {} ) => {

    instance.canvas.width = width * instance.dpr;
    instance.canvas.height = height * instance.dpr;

    Object.assign( instance.canvas.style, {
      width: `${ width }px`,
      height: `${ height }px`,
    } );

    return instance;

  };

  instance.setupMatrices = ( { camera } ) => {

    switch ( camera.type ) {

      case 'perspective':

        camera.perspective( {
          fov: camera.fov,
          aspect: camera.aspect,
          near: camera.near,
          far: camera.far
        } );

        break;

      case 'orthogonal':

        camera.orthogonal( {
          left: camera.left,
          right: camera.right,
          bottom: camera.bottom,
          top: camera.top,
          near: camera.near,
          far: camera.far
        } );

        break;

      default:
        return;

    }

    camera.modelViewMatrix.identity();
    camera.modelViewMatrix.translate( camera.modelViewMatrix.value, [ camera.position.x, camera.position.y, camera.position.z ] );
    camera.modelViewMatrix.rotate( camera.modelViewMatrix.value, radian, [ camera.rotation.x, camera.rotation.y, camera.rotation.z ] );

    return instance;

  };

  return instance;

};

const makeInitializing = instance => {

  instance
    .initProgram()
    .initGL()
    .resize();

  return instance;

};

export const Renderer = function ( config = {} ) {

  Object.assign( this,
    Archetype.extend(
      createConstructor( config ),
      createPrototype,
      makeInitializing
    )
  );

};

function getShader( { gl, type, codeSource } ) {

  const shader = {
    fragment: gl.createShader( gl.FRAGMENT_SHADER ),
    vertex: gl.createShader( gl.VERTEX_SHADER )
  };

  const currentShader = shader[ type ];

  gl.shaderSource( currentShader, codeSource );
  gl.compileShader( currentShader );

  if ( !gl.getShaderParameter( currentShader, gl.COMPILE_STATUS ) ) {

    console.log( gl.getShaderInfoLog( currentShader ) );

    return null;

  }

  return currentShader;

};