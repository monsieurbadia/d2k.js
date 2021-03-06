import { oftype } from 'u3s/src/u3s';
import { Mouse } from './d2k.mouse';
import fshaderSource from '../glsl/renderer.fragment.glsl';
import vshaderSource from '../glsl/renderer.vertex.glsl';


/**
 * @author monsieurbadia / https://monsieurbadia.com
 */


let animationFrameId = 0;


export class Renderer {

  gl: any;
  dpr: number = 1;
  canvas: any;
  radian: number = 0;
  program: Iprogram = {
    modelViewMatrix: {},
    normalMatrix: {},
    projectionMatrix: {},
    object3dMatrix: {},
    position: 0,
    normal: 0,
    color: 0
  };
  mouse: Mouse;
  isContextLost = false;
  isRendering = false;
  lastFrame = null;
  failIfMajorPerformanceCaveat = true;
  powerPreference = 'default';
  preserveDrawingBuffer = false;
  animationFrame: ( payload: { time?: number } ) => void = () => {};

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

    this.onAnimationFrame = this.onAnimationFrame.bind( this );

    this.canvas.addEventListener( 'webglcontextlost', this.oncontextlost, false );
    this.canvas.addEventListener( 'webglcontextrestored', this.oncontextrestore, false );

    this.gl = canvas.getContext( 'experimental-webgl', {
      alpha,
      antialias,
      failIfMajorPerformanceCaveat: this.failIfMajorPerformanceCaveat,
      powerPreference: this.powerPreference,
      preserveDrawingBuffer: this.preserveDrawingBuffer
    } );

    this.mouse = new Mouse( 0, 0, canvas );
    this.mouse.enable = true;

    this
      .initProgram()
      .initGL()
      .resize();

  }

  oncontextlost ( event: WebGLContextEvent ): void {
    
    event.preventDefault();

    console.log( '<• renderer context lost.' );

    this.isContextLost = true;

  }

  oncontextrestore ( event: WebGLContextEvent ): void {

    console.log( '<• renderer context restored.' );

    this.isContextLost = false;

    this
      .initProgram()
      .initGL()
      .resize();

  }

  render ( { scene, camera }:{ scene?: object, camera?: ICamera } = {} ): this {

    let object3d;

    if ( this.isContextLost ) return this;

    for ( let i = 0; i < (<any>scene).children.length; i++ ) {
  
      object3d = (<any>scene).children[ i ];

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


        this.gl.uniformMatrix4fv( this.program?.object3dMatrix, false, object3d.matrix.value );

        this.gl.drawElements( this.gl.TRIANGLES, object3d.indices.length, this.gl.UNSIGNED_SHORT, 0 );

        this.gl.flush();

      }

      if ( camera ) {

        this.gl.uniformMatrix4fv( this.program.modelViewMatrix, false, camera.modelViewMatrix.value );
        this.gl.uniformMatrix4fv( this.program.normalMatrix, false, camera.normalMatrix.value );
        this.gl.uniformMatrix4fv( this.program.projectionMatrix, false, camera.projectionMatrix.value );

      }

    }

    this.radian += Math.PI / 180;

    return this;

  }

  clear (): this {

    this.gl.clearColor( 0.0, 0.0, 0.0, 1.0 );
    this.gl.clearDepth( 1.0 );
    this.gl.clear( this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT );

    this.clean();

    return this
  
  }

  clean (): void {

    this.canvas.removeEventListener( 'webglcontextlost', this.oncontextlost, false );
    this.canvas.removeEventListener( 'webglcontextrestored', this.oncontextrestore, false );

    if ( animationFrameId ) {
    
      window.cancelAnimationFrame( animationFrameId );
    
      animationFrameId = 0;

    }

  }

  getShader ( { type, codeSource }:{ type?: any, codeSource?: string } = {} ): null | object {

    const shader = {
      fragment: this.gl.createShader( this.gl.FRAGMENT_SHADER ),
      vertex: this.gl.createShader( this.gl.VERTEX_SHADER )
    };
  
    const currentShader = (<any>shader)[ type ];
  
    this.gl.shaderSource( currentShader, codeSource );
    this.gl.compileShader( currentShader );
  
    if ( !this.gl.getShaderParameter( currentShader, this.gl.COMPILE_STATUS ) ) {
  
      console.log( this.gl.getShaderInfoLog( currentShader ) );
  
      return null;
  
    }
  
    return currentShader;
  
  }

  initGL (): this {

    this.gl.enable( this.gl.DEPTH_TEST );
    this.gl.depthFunc( this.gl.LEQUAL ); 

    return this;

  }

  initProgram (): this {

    this.program = this.gl.createProgram();

    this.gl.attachShader( this.program, this.getShader( { type: 'fragment', codeSource: fshaderSource } ) );
    this.gl.attachShader( this.program, this.getShader( { type: 'vertex', codeSource: vshaderSource } ) );
		this.gl.linkProgram( this.program );

		if ( !this.gl.getProgramParameter( this.program, this.gl.LINK_STATUS ) ) {

		  alert( `Could not initialise shader program, ${ this.gl.getProgramInfoLog( this.program ) }` );

		}

    this.gl.useProgram( this.program );

    this.program.color = this.gl.getAttribLocation( this.program, 'color' );
    this.program.normal = this.gl.getAttribLocation( this.program, 'normal' );
    this.program.position = this.gl.getAttribLocation( this.program, 'position' );

    this.program.modelViewMatrix = this.gl.getUniformLocation( this.program, 'modelViewMatrix' );
    this.program.normalMatrix = this.gl.getUniformLocation( this.program, 'normalMatrix' );
    this.program.object3dMatrix = this.gl.getUniformLocation( this.program, 'object3dMatrix' );
    this.program.projectionMatrix = this.gl.getUniformLocation( this.program, 'projectionMatrix' );
    // this.program.uSampler = this.gl.getUniformLocation( this.program, 'uSampler' );

    return this;

  }

  resize (): this {

    this
      .setSize()
      .clear();

    return this;

  }

  setSize ( { width = window.innerWidth, height = window.innerHeight } = {} ): this {

    this.canvas.width = width * this.dpr;
    this.canvas.height = height * this.dpr;

    this.setViewportSize();

    Object.assign( this.canvas.style, {
      width: `${ width }px`,
      height: `${ height }px`,
    } );

    return this;

  }

  setupMatrices ( { object3d, camera }: { object3d?: any, camera?: ICamera } = {} ): this | void {

    if ( !camera || !object3d ) {
      return this;
    }

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
    camera.modelViewMatrix.translate( camera.modelViewMatrix.value, camera.position.value );
    camera.modelViewMatrix.rotate( camera.modelViewMatrix.value, this.radian, camera.rotation.value );

    object3d.matrix.identity();
    object3d.matrix.translate( object3d.matrix.value, object3d.position.value );
    object3d.matrix.rotateX( object3d.matrix.value, this.mouse.PHI );
    object3d.matrix.rotateY( object3d.matrix.value, this.mouse.THETA );

    this.mouse.render();

    return this;

  }

  onAnimationFrame ( time: number = 0 ): void {
  
    if ( !this.isRendering ) return;

    if ( oftype( this.animationFrame ) === 'function' ) {

      this.animationFrame( { time } );
  
      animationFrameId = window.requestAnimationFrame( this.onAnimationFrame );
  
    }
 
  }

  start (): void {

    if ( this.isRendering ) return;
    if ( this.animationFrame === null ) return;

    animationFrameId = window.requestAnimationFrame( this.onAnimationFrame );
    
    this.isRendering = true;

  }

  stop (): void {

    this.isRendering = false;

  }

  onrender ( f: () => void ): void {

    this.animationFrame = f;

    this.start();

  }

  setViewportSize ( width: number = this.canvas.width, height: number = this.canvas.height ): this {

    this.gl.viewport( 0, 0, width, height );

    return this;

  }

}


