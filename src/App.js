import React, { useState, useEffect } from 'react';

import Cuboid from './components/3d/cuboid.js';
import View3D from './components/3d/view3d.js';

import './App.css';


const camDefault = {
  x: 0, y: 200, z: 0,
  rX: 0, rY: 0, rZ: 0,
  focalLength: 500
}


function App() {
  const [camera, setCamera] = useState(camDefault);
  useEffect(() => {
    // Nasty prototype code follows...
    const keypress = (e) => {
      switch (e.code) {
        // Move backwards and forwards
        case 'KeyW':
          setCamera({
            ...camera,
            z: camera.z + 10
          });
          break;
        case 'KeyS':
          setCamera({
            ...camera,
            z: camera.z - 10
          });
          break;
        // Move left and right
        case 'KeyA':
            setCamera({
              ...camera,
              x: camera.x + 10
            });
            break;
        case 'KeyD':
          setCamera({
            ...camera,
            x: camera.x - 10
          });
          break;
        // Move up and down
        case 'KeyZ':
          setCamera({
            ...camera,
            y: camera.y + 10
          });
          break;
        case 'KeyX':
          setCamera({
            ...camera,
            y: camera.y - 10
          });
          break;
        // Reset position
        case 'KeyB':
          setCamera({
            ...camera,
            x: 0, y: 200, z: 0
          });
          break;
        // Look left right
        case 'KeyQ':
          setCamera({
            ...camera,
            rY: camera.rY - 0.05
          });
          break;
        case 'KeyE':
          setCamera({
            ...camera,
            rY: camera.rY + 0.05
          });
          break;
        case 'KeyR':
          setCamera({
            ...camera,
            rX: camera.rX + 0.05
          });
          break;
        case 'KeyF':
          setCamera({
            ...camera,
            rX: camera.rX - 0.05
          });
          break;
        // Resets rotation
        case 'KeyV':
          setCamera({
            ...camera,
            rX: 0, rY: 0, rZ: 0
          });
          break;
        // Focal length
        case 'KeyO':
          setCamera({
            ...camera,
            focalLength: camera.focalLength + 10
          });
          break;
        case 'KeyL':
          setCamera({
            ...camera,
            focalLength: camera.focalLength - 10
          });
          break;
        case 'KeyP':
          setCamera({
            ...camera,
            focalLength: 500
          });
          break;
      }
    }
    document.addEventListener('keydown', keypress);
    return () => document.removeEventListener('keydown', keypress);
  });


  return (
    <>
      <div id="cam-details">
        <h3>Camera</h3>
        <p>Position x: {camera.x} y: {camera.y} z: {camera.z}</p>
        <p>Rotation x: {camera.rX.toFixed(2)} y: {camera.rY.toFixed(2)} z: {camera.rZ.toFixed(2)}</p>
        <p>Focal Length: {camera.focalLength}</p>
      </div>
      <View3D camera={camera}>
        <Cuboid width="150px" height="100px" depth="200px"
          front={<div className='cube-side'>Front</div>}
          back={<div className='cube-side'>Back</div>}
          left={<div className='cube-side'>Left</div>}
          right={<div className='cube-side'>Right</div>}
          top={<div className='cube-cap'>Top</div>}
          bottom={<div className='cube-cap'>Bottom</div>}>
        </Cuboid>
        <div className='plane'></div>
      </View3D>
    </>
  );
}

export default App;
