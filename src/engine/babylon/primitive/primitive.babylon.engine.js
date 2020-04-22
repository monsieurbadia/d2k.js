import { FS } from '=>/core/core.events';

/**
 * @author monsieurbadia / https://monsieurbadia.com/
 */

/** @public */
const onrender = ( { engine, scene } ) => {
  
  for ( let i = 0; i < engine.renders.length; i++ ) {
    if ( engine.renders[ i ]( engine?.timer.getDelta() ) === null )
      return null;
  }

  engine.runRenderLoop( _ => scene.render() );

};

/** @public */
export const BABYLONEngine = RENDERING_ENGINE => {

  const { canvas } = RENDERING_ENGINE.coreData;
  const engine = new RENDERING_ENGINE.Engine( canvas, true );

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  RENDERING_ENGINE.coreData.engine = engine;

  return Object.assign( engine, {
    ...FS,
    onrender
  } );

};
