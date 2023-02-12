import React from 'react';

import Styles from './view3d.module.css';

const camDefault = {
    x: 0, y: 200, z: 500,
    rX: 0, rY: 0, rZ: 0,
    focalLength: 1000
}

export default function View3D({camera = camDefault, world={width:0, height:0}, children}) {

    const viewport = {
        "--fL": `${camera.focalLength}px`
    }
    
    const scene = {
        "--wX": world.width,
        "--wY": world.height,
        "--rX": `${camera.rX}rad`,
        "--rY": `${-camera.rY}rad`,
        "--rZ": `${camera.rZ}rad`
    }

    const cam = {
        "--pX": `${-camera.x}px`,
        "--pY": `${camera.y}px`,
        "--pZ": `${-camera.z}px`
    }

    return (
        <div style={viewport} className={ Styles['viewport'] }>
            <div style={scene} className={ Styles['scene'] }>
                <div style={cam} className={ Styles['camera'] }>
                    { children }
                </div>
            </div>
        </div>
    );
}