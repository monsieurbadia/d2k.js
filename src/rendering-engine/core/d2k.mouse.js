import { Vector2 } from '../math/d2k.vector2';

/**
 * @author monsieurbadia / https://monsieurbadia.com
 */

export class Mouse {

  AMORTIZATION = 0.95;
  THETA = 0;
  PHI = 0;
  drag = false;
  enable = false;
  direction = new Vector2();
  position = new Vector2();
  lastPosition = new Vector2();

  constructor ( x = 0, y = x, canvas ) {

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

  onmousedown ( event ) {

    this.drag = true;
    this.lastPosition.x = event.pageX;
    this.lastPosition.y = event.pageY;

    event.preventDefault();

    return false;

  }

  onmousemove ( event ) {

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

  onmouseup ( event ) {

    this.drag = false;

    event.preventDefault();

  }

  render () {
    
    if ( this.enable && !this.drag ) {
    
      this.direction.x *= this.AMORTIZATION;
      this.direction.y *= this.AMORTIZATION;
      this.THETA += this.direction.x;
      this.PHI += this.direction.y;

    }

  }

}

