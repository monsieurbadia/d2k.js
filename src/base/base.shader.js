/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const SHADER = {
  TYPE: {
    vertexShader: {
      name: '#include <core_vertex>',
      template: ''
    },
    fragmentShader: {
      name: '#include <core_fragment>',
      template: ''
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
