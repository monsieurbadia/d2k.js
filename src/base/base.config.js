/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const CONFIG = Object.freeze( {

  camera: {
    name: 'current',
    config: {
      args: [
        75,
        null,
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

  renderer: {
    name: 'current',
    config: {
      pixelRatio: window.devicePixelRatio,
      size: [ window.innerWidth, window.innerHeight ],
    }
  }

} );
