// # λ <• /* TODO: including */ •>

attribute vec4 position;
attribute vec4 color;
attribute vec2 texture2d;

uniform vec2 resolution;
uniform mat4 object3dMatrix;
uniform mat4 modelViewMatrix;
uniform mat4 projectionMatrix;
uniform vec3 cameraPosition;

varying vec4 vColor;
varying vec2 vTexture;
varying vec3 pViewPosition;

void main () {

  vec4 mvPosition = modelViewMatrix * position;
  vec4 mPosition = object3dMatrix * vec4( position.xyz, 1.0 );
  pViewPosition = cameraPosition - mPosition.xyz;

  vColor = color;

  // gl_Position = projectionMatrix * mvPosition;
  gl_Position = projectionMatrix * modelViewMatrix * object3dMatrix * vec4( position.xyz, 1.0 );
}