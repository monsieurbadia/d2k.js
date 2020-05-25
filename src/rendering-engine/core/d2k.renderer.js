import { fail } from 'u3s';
import fshaderSource from '../glsl/renderer.fragment.glsl';
import vshaderSource from '../glsl/renderer.vertex.glsl';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export class Renderer {

  gl = null;
  radian = 0;
  program = null;
  failIfMajorPerformanceCaveat = true;
  powerPreference = 'default';
  preserveDrawingBuffer = false;

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

    this.gl = canvas.getContext( 'experimental-webgl', {
      alpha,
      antialias,
      failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
      powerPreference: this.powerPreference,
      preserveDrawingBuffer: this.preserveDrawingBuffer
    } );

    this
      .initProgram()
      .initGL()
      .resize();

  }

  onrender ( { scene, camera } ) {
    
    let object3d;

    for ( let i = 0; i < scene.children.length; i++ ) {
  
      object3d = scene.children[ i ];

      if ( object3d ) {
        
        if ( !object3d.__positionBuffer ) object3d.__positionBuffer = this.gl.createBuffer();
        this.gl.bindBuffer( this.gl.ARRAY_BUFFER, object3d.__positionBuffer );
        this.gl.bufferData( this.gl.ARRAY_BUFFER, new Float32Array( object3d.vertices ), this.gl.STATIC_DRAW );
  
        if ( !object3d.__colorBuffer ) object3d.__colorBuffer = this.gl.createBuffer();
        this.gl.bindBuffer( this.gl.ARRAY_BUFFER, object3d.__colorBuffer );
        this.gl.bufferData( this.gl.ARRAY_BUFFER, new Float32Array( object3d.colors ), this.gl.STATIC_DRAW );

        if ( object3d.normals.length > 0 ) {
          
          if ( !object3d.__normalBuffer ) object3d.__normalBuffer = this.gl.createBuffer();
          this.gl.bindBuffer( this.gl.ARRAY_BUFFER, object3d.__normalBuffer );
          this.gl.bufferData( this.gl.ARRAY_BUFFER, new Float32Array( object3d.normals ), this.gl.STATIC_DRAW );

        }

        if ( !object3d.__indexBuffer ) object3d.__indexBuffer = this.gl.createBuffer();
        this.gl.bindBuffer( this.gl.ELEMENT_ARRAY_BUFFER, object3d.__indexBuffer );
        this.gl.bufferData( this.gl.ELEMENT_ARRAY_BUFFER, new Uint16Array( object3d.indices ), this.gl.STATIC_DRAW );

        this.gl.bindBuffer( this.gl.ELEMENT_ARRAY_BUFFER, object3d.__indexBuffer );

        this.setupMatrices( { object3d, camera } );
  
        this.gl.bindBuffer( this.gl.ARRAY_BUFFER, object3d.__positionBuffer );
        this.gl.vertexAttribPointer( this.program.position, 3, this.gl.FLOAT, false, 0, 0 );
        this.gl.enableVertexAttribArray( this.program.position );
  
        this.gl.bindBuffer( this.gl.ARRAY_BUFFER, object3d.__colorBuffer );
        this.gl.vertexAttribPointer( this.program.color, 4, this.gl.FLOAT, false, 0, 0 );
        this.gl.enableVertexAttribArray( this.program.color );
        
        if ( object3d.normals.length > 0 ) {

          this.gl.bindBuffer( this.gl.ARRAY_BUFFER, object3d.__normalBuffer );
          this.gl.vertexAttribPointer( this.program.normal, 3, this.gl.FLOAT, false, 0, 0 );
          this.gl.enableVertexAttribArray( this.program.normal );

        }

        this.gl.uniformMatrix4fv( this.program.modelViewMatrix, false, camera.modelViewMatrix.value );
        this.gl.uniformMatrix4fv( this.program.normalMatrix, false, camera.normalMatrix.value );
        this.gl.uniformMatrix4fv( this.program.projectionMatrix, false, camera.projectionMatrix.value );
        this.gl.uniformMatrix4fv( this.program.object3dMatrix, false, object3d.matrix.value );

        this.gl.drawElements( this.gl.TRIANGLES, object3d.indices.length, this.gl.UNSIGNED_SHORT, 0 );
        this.gl.flush();

      }

    }

    this.radian += Math.PI / 180;

    return this;

  }

  clear () {

    this.gl.clearColor( 0.0, 0.0, 0.0, 1.0 );
    this.gl.clearDepth( 1.0 );
    this.gl.clear( this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT );

    return this
  
  }

  getShader = ( { type, codeSource } ) => {

    const shader = {
      fragment: this.gl.createShader( this.gl.FRAGMENT_SHADER ),
      vertex: this.gl.createShader( this.gl.VERTEX_SHADER )
    };
  
    const currentShader = shader[ type ];
  
    this.gl.shaderSource( currentShader, codeSource );
    this.gl.compileShader( currentShader );
  
    if ( !this.gl.getShaderParameter( currentShader, this.gl.COMPILE_STATUS ) ) {
  
      console.log( this.gl.getShaderInfoLog( currentShader ) );
  
      return null;
  
    }
  
    return currentShader;
  
  }

  initGL () {

    this.gl.enable( this.gl.DEPTH_TEST );
    this.gl.depthFunc( this.gl.LEQUAL ); 

    return this;

  }

  initProgram () {

    this.program = this.gl.createProgram();

    this.gl.attachShader( this.program, this.getShader( { type: 'fragment', codeSource: fshaderSource } ) );
    this.gl.attachShader( this.program, this.getShader( { type: 'vertex', codeSource: vshaderSource } ) );
		this.gl.linkProgram( this.program );

		if ( !this.gl.getProgramParameter( this.program, this.gl.LINK_STATUS ) ) {

			fail.warning = `Could not initialise shaders, ${ gl.getProgramInfoLog( this.program ) }`;

		}

    this.gl.useProgram( this.program );

    this.program.color = this.gl.getAttribLocation( this.program, 'color' );
    this.program.normal = this.gl.getAttribLocation( this.program, 'normal' );
    this.program.position = this.gl.getAttribLocation( this.program, 'position' );

		this.program.modelViewMatrix = this.gl.getUniformLocation( this.program, 'modelViewMatrix' );
		this.program.normalMatrix = this.gl.getUniformLocation( this.program, 'normalMatrix' );
    this.program.object3dMatrix = this.gl.getUniformLocation( this.program, 'object3dMatrix' );
    this.program.projectionMatrix = this.gl.getUniformLocation( this.program, 'projectionMatrix' );
    this.program.uSampler = this.gl.getUniformLocation( this.program, 'uSampler' );

    return this;

  }

  resize () {

    this
      .setSize()
      .clear();

    return this;

  }

  setSize ( { width = window.innerWidth, height = window.innerHeight } = {} ) {

    this.canvas.width = width * this.dpr;
    this.canvas.height = height * this.dpr;

    this.setViewportSize();

    Object.assign( this.canvas.style, {
      width: `${ width }px`,
      height: `${ height }px`,
    } );

    return this;

  }

  setupMatrices ( { object3d, camera } = {} ) {

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

    object3d.matrix.identity();
    object3d.matrix.translate( object3d.matrix.value, [ object3d.position.x, object3d.position.y, object3d.position.z ] );

    return this;

  }

  setViewportSize ( width = this.canvas.width, height = this.canvas.height ) {

    this.gl.viewport( 0, 0, width, height );

    return this;

  }

}
