## THREE format JSON

[home](./../../README.md)

**composify**

```json
{
  "composify": {
    "config": {
      "start": true,
      "scene": {
        "main": "mySceneName",
        "others": []
      },
      "mesh": [ { "name": "myMeshName", "parent": "main" } ],
      "light": [ { "name": "myLightName", "parent": "main" } ],
      "camera": {
        "main": "myCameraName",
        "others": []
      },
      "renderer": "myRendererName"
    }
  }
}
```

**camera**

```json
{
  "camera":{
    "name": "myCameraName",
    "config": {
      "args": [ 75, null, 0.1, 1000 ],
      "position": [ 0, 0, 100 ],
      "rotation": [ 0, 0, 0 ],
      "scale": [ 1, 1, 1 ],
      "type": "perspective"
    }
  }
}
```

**mesh**

```json
{
  "mesh":{
    "name": "myMeshName",
    "config": {
      "geometry": {
        "args": [ 20, 20, 20 ],
        "type": "box-buffer"
      },
      "material": {
        "args": {
          "color": "0x0fffff",

          "transparent": false
        },
        "type": "mesh-phong"
      },
      "receiveShadow": true,
      "position": [ 40, 0, 0 ],
      "rotation": [ 0, 0, 0 ],
      "scale": [ 1, 1, 1 ]
    }
  }
}
```

**renderer**

```json
{
  "renderer":{
    "name": "myRendererName",
    "config": {
      "antialias": true,
      "autoClear": true,
      "pixelRatio": null,
      "size": [],
      "type": "webgl"
    }
  }
}
```

**light**

```json
{
  "light":{
    "name": "myLightName",
    "config": {
      "args": [ "0xf1f5bb" ],
      "position": [ 0, 1, 30 ],
      "type": "directional"
    }
  }
}
```

**loader**

```json
{
  "loader":{
    "name": "textures",
    "config": {
      "args": [ { "name": "img-1", "url": "/cover-front.28969be3.jpg" }, { "name": "img-2", "url": "/cover-front.28969be3.jpg" } ],
      "type": "texture"
    }
  }
}
```

**scene**

```json
{
  "scene":{
    "name":"mySceneName"
  }
}
```