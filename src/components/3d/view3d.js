import React from 'react';

import Styles from './view3d.module.css';

const camDefault = {
    x: 0, y: 200, z: 1000,
    rX: 0, rY: 0, rZ: 0,
    focalLength: 1000
}

export default function View3D({camera = camDefault, children}) {

    const viewport = {
        overflow:"hidden",
        perspective:`${camera.focalLength}px`,
        width:"100%",
        height:"100%"
    }
    const scene = {
        transformStyle: "preserve-3d",
        width: "100%",
        height: "100%",
        transformOrigin: `center center ${camera.focalLength}px`,
        transform: `rotateX(${camera.rX}rad) rotateY(${-camera.rY}rad) rotateZ(${camera.rZ}rad)`,
    }
    const cam = {
        transformStyle: "preserve-3d",
        position: "relative",
        width: "100%",
        height: "100%",
        translate: `${-camera.x}px ${camera.y}px ${-camera.z + camera.focalLength}px`,
    }

    // const viewport = {
    //     "--focalLength": `${camera.focalLength}px`
    // }


    return (
        <div style={viewport}>
            <div style={scene}>
                <div style={cam}>
                    {children}
                </div>
            </div>
        </div>
    );
}