import React from 'react';

import { worldToCss, rotationToCss } from '../../utils/coords.js';

import Styles from './view3d.module.css';

const camDefault = {
    x: 0, y: 200, z: 500,
    rX: 0, rY: 0, rZ: 0,
    focalLength: 1000
}

export default function View3D({camera = camDefault, world={width:0, height:0}, children}) {

    const pos = worldToCss(camera);
    const rot = rotationToCss(camera);

    const viewport = {
        "--fL": `${camera.focalLength}px`
    }
    
    const scene = {
        "--wX": `${world.width}px`,
        "--wY": `${world.height}px`,
        "--rX": rot.rX,
        "--rY": rot.rY,
        "--rZ": rot.rZ
    }

    const cam = {
        "--pX": pos.x,
        "--pY": pos.y,
        "--pZ": pos.z
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