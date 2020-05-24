import { fail } from 'u3s';
import { Matrix4 } from '../math/d2k.matrix4';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

const getShader = ( { gl, type, codeSource } ) => {

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

const vshaderSource = `
  // # λ <• /* TODO: including */ •>
  
  attribute vec4 position;
  attribute vec4 color;
  attribute vec2 texture2d;

  uniform vec2 resolution;
  uniform mat4 object3dMatrix;
  uniform mat4 modelViewMatrix;
  uniform mat4 projectionMatrix;
  uniform vec3 cameraPosition;

  varying vec4 vColor;
  varying vec2 vTexture;
  varying vec3 pViewPosition;

  void main () {

    vec4 mvPosition = modelViewMatrix * position;
    vec4 mPosition = object3dMatrix * vec4( position.xyz, 1.0 );
    pViewPosition = cameraPosition - mPosition.xyz;

    vColor = color;

    gl_Position = projectionMatrix * mvPosition;
  }
`;

const fshaderSource = `
  #ifdef GL_ES
  precision highp float;
  #endif

  varying vec4 vColor;
  varying vec3 pViewPosition;

  void main () {

    gl_FragColor = vColor;
  }
`;


export class Renderer {

  gl = null;
  program = null;
  modelViewMatrix = new Matrix4();
  radian = 0;

  constructor ( {
    alpha = false,
    antialias = true,
    autoClear = true,
    canvas = document.createElement( 'canvas' ),
    width = 200,
    height = 200,
    dpr = window.devicePixelRatio
  } = {} ) {

    Object.assign( this, { alpha, antialias, autoClear, canvas, width, height, dpr } );

    this.gl = canvas.getContext( 'webgl', { alpha, antialias } );

    this
      .initProgram()
      .initGL()
      .resize();

  }

  onrender ( { scene, camera } ) {
    
    let object3d;

		this.gl.uniform3f( this.program.cameraPosition, camera.position.x, camera.position.y, camera.position.z );

    for ( let i = 0; i < scene.children.length; i++ ) {
  
      object3d = scene.children[ i ];

      if ( object3d ) {

        if ( !object3d.__positionBuffer ) object3d.__positionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer( this.gl.ARRAY_BUFFER, object3d.__positionBuffer );
        this.gl.bufferData( this.gl.ARRAY_BUFFER, new Float32Array( object3d.vertices ), this.gl.STATIC_DRAW );
  
        if ( !object3d.__colorBuffer ) object3d.__colorBuffer = this.gl.createBuffer();
        this.gl.bindBuffer( this.gl.ARRAY_BUFFER, object3d.__colorBuffer );
        this.gl.bufferData( this.gl.ARRAY_BUFFER, new Float32Array( object3d.colors ), this.gl.STATIC_DRAW );
  
        if ( !object3d.__indexBuffer ) object3d.__indexBuffer = this.gl.createBuffer();
        this.gl.bindBuffer( this.gl.ELEMENT_ARRAY_BUFFER, object3d.__indexBuffer );
        this.gl.bufferData( this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array( object3d.indices ), this.gl.STATIC_DRAW );

        this.setupMatrices( { object3d: null, camera } );
  
        this.gl.bindBuffer( this.gl.ARRAY_BUFFER, object3d.__positionBuffer );
        this.gl.vertexAttribPointer( this.program.position, 3, this.gl.FLOAT, false, 0, 0 );
        this.gl.enableVertexAttribArray( this.program.position );
  
        this.gl.bindBuffer( this.gl.ARRAY_BUFFER, object3d.__colorBuffer );
        this.gl.vertexAttribPointer( this.program.color, 4, this.gl.FLOAT, false, 0, 0 );
        this.gl.enableVertexAttribArray( this.program.color );
      
        this.gl.bindBuffer( this.gl.ELEMENT_ARRAY_BUFFER, object3d.__indexBuffer );
        
        this.gl.uniformMatrix4fv( this.program.projectionMatrix, false, camera.projectionMatrix.value );
        this.gl.uniformMatrix4fv( this.program.modelViewMatrix, false, camera.modelViewMatrix.value );
        this.gl.uniformMatrix4fv( this.program.object3dMatrix, false, object3d.matrix.value );

      }

    }

    this.gl.drawElements( this.gl.TRIANGLES, object3d.indices.length, this.gl.UNSIGNED_SHORT, 0 );

    this.radian += Math.PI / 180;

    return this;

  };

  clear () {
    
    this.gl.clearColor( 0.0, 0.0, 0.0, 1.0 );
    this.gl.clearDepth( 1.0 );
    this.gl.clear( this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT );

    return this
  
  };

  initGL () {

    this.gl.enable( this.gl.DEPTH_TEST );
    this.gl.depthFunc( this.gl.LEQUAL ); 

    return this;

  };

  initProgram () {

    this.program = this.gl.createProgram();

    this.gl.attachShader( this.program, getShader( { gl: this.gl, type: 'fragment', codeSource: fshaderSource } ) );
    this.gl.attachShader( this.program, getShader( { gl: this.gl, type: 'vertex', codeSource: vshaderSource } ) );
		this.gl.linkProgram( this.program );

		if ( !this.gl.getProgramParameter( this.program, this.gl.LINK_STATUS ) ) {

			fail.warning = `Could not initialise shaders, ${ gl.getProgramInfoLog( this.program ) }`;

		}

    this.gl.useProgram( this.program );

		this.program.modelViewMatrix = this.gl.getUniformLocation( this.program, 'modelViewMatrix' );
    this.program.projectionMatrix = this.gl.getUniformLocation( this.program, 'projectionMatrix' );
    this.program.normalMatrix = this.gl.getUniformLocation( this.program, 'normalMatrix' );
    this.program.object3dMatrix = this.gl.getUniformLocation( this.program, 'object3dMatrix' );
		this.program.cameraPosition = this.gl.getUniformLocation( this.program, 'cameraPosition' );
    this.program.resolution = this.gl.getUniformLocation( this.program, 'resolution' );

    this.program.position = this.gl.getAttribLocation( this.program, 'position' );
    this.gl.enableVertexAttribArray( this.program.position );

    this.program.color = this.gl.getAttribLocation( this.program, 'color' );
    this.gl.enableVertexAttribArray( this.program.color );

		this.program.viewMatrixArray = new Float32Array( 16 );
		this.program.modelViewMatrixArray = new Float32Array( 16 );
    this.program.projectionMatrixArray = new Float32Array( 16 );

    return this;

  };

  resize () {

    this
      .setSize()
      .clear();

    return this;

  };

  setSize ( { width = window.innerWidth, height = window.innerHeight } = {} ) {

    this.canvas.width = width * this.dpr;
    this.canvas.height = height * this.dpr;

    this.gl.viewport( 0, 0, this.canvas.width, this.canvas.height );

    Object.assign( this.canvas.style, {
      width: `${ width }px`,
      height: `${ height }px`,
    } );

    return this;

  };

  setupMatrices ( { camera } ) {

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
    camera.modelViewMatrix.rotate( camera.modelViewMatrix.value, this.radian, [ camera.rotation.x, camera.rotation.y, camera.rotation.z ] );

    return this;

  };

}
