import { frozen } from 'u3s';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
export const SHADER = frozen( {
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
  },
  TYPE: {
    color: {
      name: '#include <core_color>',
      template: '',
      type: 'fragment'
    },
    vertex: {
      name: '#include <core_vertex>',
      template: '',
      type: 'vertex'
    },
    fragment: {
      name: '#include <core_fragment>',
      template: '',
      type: 'fragment'
    }
  },
  UNIFORMS: {
    mouse: {
      type: 'v2',
      value: []
    },
    resolution: {
      type: 'v2',
      value: [ window.innerWidth, window.innerHeight ]
    },
    time: {
      type: 'f',
      value: 1.0
    }
  }
} );
