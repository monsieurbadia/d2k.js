import { CALLBACKS } from '=>/base'

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

const onrender = ( { engine, scene } ) =>
  engine.runRenderLoop( _ => {

    for ( let i = 0; i < engine.renders.length; i++ ) {
      if ( engine.renders[ i ]( engine?.timer.getDelta() ) === null )
        return null;
    }

    scene.render();

  } );

export const BABYLONEngine = RENDERING_ENGINE => {

  const { canvas } = RENDERING_ENGINE.coreData;
  const engine = new RENDERING_ENGINE.Engine( canvas, true );

  RENDERING_ENGINE.coreData.engine = engine;

  return Object.assign( engine, {
    ...CALLBACKS,
    onrender
  } );

};
