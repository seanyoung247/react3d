import React from "react";

import { classList } from '../../utils/classlist.js'; 

import './object3d.css';

export function Object3D({dimensions, style, className, children}) {

    const obj = {
        "--x": dimensions.x ?? '0px',
        "--y": dimensions.y ?? '0px',
        "--z": dimensions.z ?? '0px',
        "--w": dimensions.width ?? "100px",
        "--h": dimensions.height ?? "100px"
    };

    return (
        <div style={ {...style, ...obj} } className={ classList("object3d", className) }>
            { children }
        </div>
    );
}

export function Face3D({style, className, children}) {
    return (
        <div style={ style } className={ classList('face3d', className) }>
            { children }
        </div>
    )
}