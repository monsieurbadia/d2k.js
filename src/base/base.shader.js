/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const SHADER = {
  TYPE: {
    vertexShader: {
      name: '#include <core_vertex>',
      template: '',
      type: 'vertex'
    },
    fragmentShader: {
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
};
