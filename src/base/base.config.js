/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const CONFIG = Object.freeze( {

  BABYLON: {

    CAMERA: {
      name: 'current-camera',
      args: [ 0, 0, 2 ],
      type: 'follow'
    },

    LIGHT: {
      name: 'current-light',
      args: [ 0, 1, 0 ],
      diffuse: [ 1, 1, 1 ],
      specular: [ 1, 1, 1 ],
      type: 'point'
    },

    MESH: {
      name: 'current-mesh',
      args: { size: 0.20 },
      position: [ 0, 0, 0 ],
      type: 'box',
      material: {
        name: 'current-material',
        type: 'standard',
        emissiveColor: [ 0.1, 0.50, 0.75 ]
      }
    },

    SCENE: {
      autoClear: true,
      clearColor: [ 0, 0, 0 ]
    }

  },

  THREE: {

    CAMERA: {
      name: 'current-camera',
      args: [
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      ],
      position: [
        0,
        0,
        80
      ],
      type: 'perspective'
    },
  
    GEOMETRY: {
      args: [ 20, 20, 20 ],
      type: 'box-buffer'
    },

    LIGHT: {
      args: [ '0xffffbb 0x080820 1' ],
      name: 'current-light',
      type: 'hemisphere'
    },

    LOADER: {
      args: [],
      type: 'object'
    },

    MATERIAL: {
      args: {
        color: 0x00ff00,
        transparent: false
      },
      type: 'mesh-normal'
    },

    MESH: {},

    RENDERER: {
      name: 'current-renderer',
      alpha: true,
      antialias: true,
      autoClear: true,
      background: 0x000000,
      pixelRatio: window.devicePixelRatio
    },

    GLSL: {
      name: 'current-shader',
      geometry: [ 2, 2 ],
      fragmentShader: 'uniform vec2 resolution;\nuniform vec2 time;\nvoid main () {\n\tvec2 st = gl_FragCoord.xy / resolution.xy;\n\tgl_FragColor=vec4(st.x, st.y, 0.0, 1.0);\n}',
      vertexShader: 'void main () {\n\tgl_Position = vec4( position, 1.0 );\n}',
      uniforms: {
        mouse: {
          type: 'v2',
          value: []
        },
        resolution: {
          type: 'v2',
          value: [
            window.innerWidth,
            window.innerHeight
          ]
        },
        time: {
          type: 'f',
          value: 1.0
        }
      },
    }

  }

} );
