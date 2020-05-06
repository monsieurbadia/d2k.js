# d2k.js

## Summary

- installation
--- shell
--- download
- configuration
--- structure
--- object
--- json
- api
--- .onstarter( init )
--- .use( MODULE )
----- shader
----- three
----- babylon
--- .with*( config )
----- .withEngine( config )
----- .withRenderer( config )
----- .withCamera( config )
----- .withScene( config )
----- .withLight( config )
----- .withLoader( config )
----- .withMesh( config )
--- .value()
--- .composify( config )
--- .onlayerization( THREE, SOURCE )
- starter
----- starter glsl
------- .canvas
------- .event
------- .glsl
------- .renderer
------- .shader
----- starter babylon
------- .camera
------- .event [ light, mesh, renderer ]
--------- .onloader
--------- .onresize
--------- .onrender
--------- .onkeyboard -> TODO
--------- .onmousemove -> TODO
--------- .ongamepad -> TODO
------- .light
------- .mesh
------- .engine
------- .scene
----- starter three
------- .camera
------- .event [ light, mesh, renderer ]
--------- .onloader
--------- .onresize
--------- .onrender
--------- .onkeyboard -> TODO
--------- .onmousemove -> TODO
--------- .ongamepad -> TODO
------- .light
------- .loader
------- .mesh
------- .renderer
------- .scene
- examples
--- create a scene using shader
--- create a scene using babylon.js
--- create a scene using three.js
--- layerization using three.js x babylon.js
- tips
--- async