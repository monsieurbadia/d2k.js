## BABYLON format JSON

[home](./../../README.md)

**composify**

```json
{
  "composify": {
    "config": {
      "start": true,
      "engine": "myEngineName",
      "scene": {
        "main": "mySceneName"
      }
    }
  }
}
```

**engine**

```json
{
  "engine": {
    "name":"myEngineName"
  }
}
```

**camera**

```json
{
  "camera": {
    "name": "myCameraName",
    "config": {
      "args": [ 0, 0, 2 ],
      "type": "follow"
    }
  }
}
```

**light**

```json
{
  "light": {
    "name": "myLightName",
    "config": {
      "args": [ 0, 1, 0 ],
      "diffuse": [ 1, 1, 1 ],
      "specular": [ 1, 1, 1 ],
      "type": "point"
    }
  }
}
```

**mesh**

```json
{
  "mesh": {
    "name": "myMeshName",
    "config": {
      "args": { "size": 0.23 },
      "position": [ 0.40, 0, 0 ],
      "type": "box",
      "material": {
        "name": "material",
        "type": "standard",
        "emissiveColor": [ 0.1, 0.50, 0.75 ]
      }
    }
  }
}
```

**scene**

```json
{
  "scene": {
    "name": "mySceneName",
    "config": {
      "autoClear": false,
      "clearColor": [ 0.6, 0.6, 0.6 ]
    }
  }
}
```