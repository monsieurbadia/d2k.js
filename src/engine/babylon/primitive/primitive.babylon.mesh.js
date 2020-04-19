/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

export const BABYLONMesh = ( ENGINE, parameters ) => {

  const mesh = ENGINE.Mesh.CreateBox( 'box', 1.0, ENGINE.coreData.scene );
  const material = new ENGINE.StandardMaterial( 'dede', ENGINE.coreData.scene );

  material.diffuseColor = new ENGINE.Color3(1, 0, 1);
  material.specularColor = new ENGINE.Color3(0.5, 0.6, 0.87);
  material.emissiveColor = new ENGINE.Color3(1, 1, 1);
  material.ambientColor = new ENGINE.Color3(0.23, 0.98, 0.53);

  mesh.material = material;

  return mesh;

};
