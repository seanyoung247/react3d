import React from 'react';
import { classList } from '../../utils/classlist';

import Styles from './view3d.module.css';

const camDefault = {
    x: 0, y: 200, z: 1000,
    rX: 0, rY: 0, rZ: 0,
    focalLength: 1000
}

export default function View3D({camera = camDefault, children}) {

    const viewport = {
        "--focalLength": `${camera.focalLength}px`
    }
    
    const scene = {
        "--rotX": `${camera.rX}rad`,
        "--rotY": `${-camera.rY}rad`,
        "--rotZ": `${camera.rZ}rad`
    }

    const cam = {
        "--posX": `${-camera.x}px`,
        "--posY": `${camera.y}px`,
        "--posZ": `${-camera.z}px`
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