import { frozen } from 'u3s';

export const BASE = frozen( {
  CAMERA: {
    type: 'perspective'
  },
  RENDERER: {
    name: 'current',
    config: {
      option: {
        antialias: true,
        pixelRatio: window.devicePixelRatio,
        size: [ window.innerWidth, window.innerHeight ],
      }
    }
  }
} );
