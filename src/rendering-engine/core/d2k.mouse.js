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
  last_position = new Vector2();

  constructor ( x = 0, y = x, canvas ) {

    this.canvas = canvas;
    this.onmousedown = this.onmousedown.bind(this);
    this.onmousemove = this.onmousemove.bind(this);
    this.onmouseup = this.onmouseup.bind(this);

    this.position.set( x, y );

    this.canvas.addEventListener( 'mousedown', this.onmousedown, false );
    this.canvas.addEventListener( 'mouseup', this.onmouseup, false );
    this.canvas.addEventListener( 'mouseout', this.onmouseup, false );
    this.canvas.addEventListener( 'mousemove', this.onmousemove, false );

  }

  onmousedown ( event ) {

    this.drag = true;
    this.last_position.x = event.pageX;
    this.last_position.y = event.pageY;

    event.preventDefault();

    return false;

  }

  onmousemove ( event ) {

    if ( !this.drag ) return false;

    this.direction.x = ( event.pageX - this.last_position.x ) * 2 * Math.PI / this.canvas.offsetWidth;
    this.direction.y = ( event.pageY - this.last_position.y ) * 2 * Math.PI / this.canvas.offsetHeight;
    this.THETA += this.direction.x;
    this.PHI += this.direction.y;
    this.last_position.x = event.pageX;
    this.last_position.y = event.pageY;

    event.preventDefault();

  }

  onmouseup ( event ) {

    this.drag = false;

  }

}

