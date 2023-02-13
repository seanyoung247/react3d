
import React, { useState, useEffect } from 'react';

import View3D from './components/3d/view3d.js';
import Cuboid from './components/3d/cuboid.js';
// import Cylinder from './components/3d/cylinder.js';

import './App.css';

const camDefault = {
  x: 0, y: 200, z: -500, // Location
  rX: 0, rY: 0, rZ: 0,  // Rotation
  focalLength: 1000,
};

function App() {
    const [camera, setCamera] = useState(camDefault);
    useEffect(() => {
        // Nasty prototype code follows...
        const keypress = (e) => {
            switch (e.code) {
                // Move backwards and forwards (z-axis)
                case 'KeyW':
                    setCamera({
                        ...camera,
                        z: camera.z + 10,
                    });
                    break;
                case 'KeyS':
                    setCamera({
                        ...camera,
                        z: camera.z - 10,
                    });
                    break;
                // Move left and right (x-axis)
                case 'KeyA':
                    setCamera({
                        ...camera,
                        x: camera.x + 10,
                    });
                    break;
                case 'KeyD':
                    setCamera({
                        ...camera,
                        x: camera.x - 10,
                    });
                    break;
                // Move up and down (y-axis)
                case 'KeyZ':
                    setCamera({
                        ...camera,
                        y: camera.y + 10,
                    });
                    break;
                case 'KeyX':
                    setCamera({
                        ...camera,
                        y: camera.y - 10,
                    });
                    break;
                // Reset position
                case 'KeyB':
                    setCamera({
                        ...camera,
                        x: camDefault.x,
                        y: camDefault.y,
                        z: camDefault.z,
                    });
                    break;
                // Look left right
                case 'KeyQ':
                    setCamera({
                        ...camera,
                        rY: camera.rY - 0.05,
                    });
                    break;
                case 'KeyE':
                    setCamera({
                        ...camera,
                        rY: camera.rY + 0.05,
                    });
                    break;
                case 'KeyR':
                    setCamera({
                        ...camera,
                        rX: camera.rX + 0.05,
                    });
                    break;
                case 'KeyF':
                    setCamera({
                        ...camera,
                        rX: camera.rX - 0.05,
                    });
                    break;
                case 'KeyT':
                    setCamera({
                        ...camera,
                        rZ: camera.rZ + 0.05,
                    });
                    break;
                case 'KeyY':
                    setCamera({
                        ...camera,
                        rZ: camera.rZ - 0.05,
                    });
                    break;
                // Resets rotation
                case 'KeyV':
                    setCamera({
                        ...camera,
                        rX: camDefault.rX,
                        rY: camDefault.rY,
                        rZ: camDefault.rZ,
                    });
                    break;
                // Focal length
                case 'KeyO':
                    setCamera({
                        ...camera,
                        focalLength: camera.focalLength + 10,
                    });
                    break;
                case 'KeyL':
                    setCamera({
                        ...camera,
                        focalLength: camera.focalLength - 10,
                    });
                    break;
                case 'KeyP':
                    setCamera({
                        ...camera,
                        focalLength: camDefault.focalLength,
                    });
                    break;
                default:
            }
        };
        document.addEventListener('keydown', keypress);
        return () => document.removeEventListener('keydown', keypress);
    });

    const cubeFaces = {
        front: <div className="cube-side">Front</div>,
        back: <div className="cube-side">Back</div>,
        left: <div className="cube-side">Left</div>,
        right: <div className="cube-side">Right</div>,
        top: <div className="cube-cap">Top</div>,
        bottom: <div className="cube-cap">Bottom</div>,
    };

    return (
        <>
            <div id="cam-details">
                <h3>Camera</h3>
                <p>
                    Position x: {camera.x} y: {camera.y} z: {camera.z}
                </p>
                <p>
                    Rotation x: {camera.rX.toFixed(2)} y: {camera.rY.toFixed(2)} z: {camera.rZ.toFixed(2)}
                </p>
                <p>Focal Length: {camera.focalLength}</p>
            </div>

            <View3D world={{ width: 1000, height: 1000 }} camera={camera}>

                <Cuboid
                    position={{ x: 100, y: 50, z: 250 }}
                    size={{ width: 100, height: 100, depth: 100 }}>

                    { cubeFaces }
                </Cuboid>

                <Cuboid
                    position={{ x: 0, y: 50, z: 0 }}
                    rotation={{ x: 0, y: 0.5, z: 0 }}
                    size={{ width: 150, height: 100, depth: 200 }}>

                    { cubeFaces }
                </Cuboid>

                <div className="plane"></div>
            </View3D>
        </>
    )
}

export default App
