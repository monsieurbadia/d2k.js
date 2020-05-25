attribute vec4 color;
attribute vec3 normal;
attribute vec4 position;
attribute vec2 texture2d;

uniform mat4 modelViewMatrix;
uniform mat4 normalMatrix;
uniform mat4 object3dMatrix;
uniform mat4 projectionMatrix;
uniform vec2 resolution;

varying vec4 vColor;
varying vec3 vLighting;

void main () {
  
  vec3 ambientLight = vec3( 0.3, 0.3, 0.3 );
  vec3 directionalLightColor = vec3( 0.0, 1.0, 1.0 );
  vec3 directionalVector = vec3( 0.85, 0.8, 0.75 );

  vec4 transformedNormal = normalMatrix * vec4( normal, 1.0 );

  float directional = max( dot( transformedNormal.xyz, directionalVector ), 0.5 );
  vLighting = ambientLight + ( directionalLightColor * directional );

  vColor = color;

  gl_Position = projectionMatrix * modelViewMatrix * object3dMatrix * vec4( position.xyz, 1.0 );
}