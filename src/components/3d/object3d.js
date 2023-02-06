import React from "react";

import { classList } from '../../utils/classlist.js'; 

import './object3d.css';

export function Object3D({dimensions, className, children}) {

    const obj = {
        "--x": dimensions.x ?? '0px',
        "--y": dimensions.y ?? '0px',
        "--z": dimensions.z ?? '0px',
        "--w": dimensions.w ?? "100px",
        "--h": dimensions.h ?? "100px",
        "--d": dimensions.d ?? "100px"
    };

    return (
        <div style={ obj } className={ classList("object3d", className) }>
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