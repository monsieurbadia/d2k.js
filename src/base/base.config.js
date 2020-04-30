/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const CONFIG = Object.freeze( {

  CAMERA: {
    name: 'current',
    config: {
      args: [
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      ],
      position: [
        0,
        0,
        100
      ],
      type: 'perspective'
    }
  },

  RENDERER: {
    name: 'current',
    config: {
      pixelRatio: window.devicePixelRatio,
      size: [ window.innerWidth, window.innerHeight ],
    }
  }

} );
