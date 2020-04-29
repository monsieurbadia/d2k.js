import { CALLBACKS } from '=>/base'

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

const onrender = ( { engine, scene } ) => {

  const renderLoop = _ => {

    for ( let i = 0; i < engine.renders.length; i++ ) {
      if ( engine.renders[ i ]( engine.getDeltaTime() ) === null )
        return null;
    }

    scene.render();

  };

  engine.runRenderLoop( renderLoop );

};

export const BABYLONEngine = RENDERING_ENGINE => {

  const { canvas } = RENDERING_ENGINE.coreData;
  const engine = new RENDERING_ENGINE.Engine( canvas, true );

  RENDERING_ENGINE.coreData.engine = engine;

  return Object.assign( engine, {
    ...CALLBACKS,
    onrender
  } );

};
