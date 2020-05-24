#ifdef GL_ES
precision highp float;
#endif

varying vec4 vColor;
varying vec3 pViewPosition;

void main () {

  gl_FragColor = vColor;
}
