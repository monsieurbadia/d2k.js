import { Vector2 } from '../math/d2k.vector2';


/**
 * @author monsieurbadia / https://monsieurbadia.com
 */


export class Mouse {

  canvas: HTMLCanvasElement;
  AMORTIZATION: number = 0.95;
  THETA: number = 0;
  PHI: number = 0;
  drag: boolean = false;
  enable: boolean = false;
  direction: Vector2 = new Vector2();
  position: Vector2 = new Vector2();
  lastPosition: Vector2 = new Vector2();

  constructor ( x: number = 0, y: number = x, canvas: HTMLCanvasElement ) {

    this.canvas = canvas;
    this.onmousedown = this.onmousedown.bind( this );
    this.onmousemove = this.onmousemove.bind( this );
    this.onmouseup = this.onmouseup.bind( this );

    this.position.set( x, y );

    this.canvas.addEventListener( 'mousedown', this.onmousedown, false );
    this.canvas.addEventListener( 'mouseup', this.onmouseup, false );
    this.canvas.addEventListener( 'mouseout', this.onmouseup, false );
    this.canvas.addEventListener( 'mousemove', this.onmousemove, false );

  }

  onmousedown ( event: MouseEvent ): boolean {

    this.drag = true;
    this.lastPosition.x = event.pageX;
    this.lastPosition.y = event.pageY;

    event.preventDefault();

    return false;

  }

  onmousemove ( event: MouseEvent ): boolean | void {

    if ( !this.drag ) return false;

    if ( this.enable ) {

      this.direction.x = ( event.pageX - this.lastPosition.x ) * 2 * Math.PI / this.canvas.offsetWidth;
      this.direction.y = ( event.pageY - this.lastPosition.y ) * 2 * Math.PI / this.canvas.offsetHeight;
      this.THETA += this.direction.x;
      this.PHI += this.direction.y;
      this.lastPosition.x = event.pageX;
      this.lastPosition.y = event.pageY;

    }

    event.preventDefault();

  }

  onmouseup ( event: MouseEvent ): void {

    this.drag = false;

    event.preventDefault();

  }

  render (): void {
    
    if ( this.enable && !this.drag ) {
    
      this.direction.x *= this.AMORTIZATION;
      this.direction.y *= this.AMORTIZATION;
      this.THETA += this.direction.x;
      this.PHI += this.direction.y;

    }

  }

}
