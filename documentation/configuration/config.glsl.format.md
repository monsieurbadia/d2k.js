## GLSL format JSON

[home](./../../README.md)

**init**

```json
{
  "init": {
    "canvas": "viewRendering",
    "glsl": true
  },
}
```

**composify**

```json
{
  "shader": {
    "name": "myShaderName",
    "config": {
      "vertexShader": "void main () {\n\tgl_Position = vec4( position, 1.0 );\n}",
      "fragmentShader": "uniform vec2 resolution;\nuniform vec2 time;\nvoid main () {\n\tvec2 st = gl_FragCoord.xy / resolution.xy;\n\tgl_FragColor=vec4(st.x, st.y, 0.0, 1.0);\n}"
    }
  }
}
```
