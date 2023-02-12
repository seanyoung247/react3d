
import React from "react";

import { worldToCss } from '../../utils/coords.js';
import { classList } from '../../utils/classlist.js';

import './object3d.css';

export function Object3D({dimensions, style, className, children}) {

    const pos = worldToCss(dimensions);

    const obj = {
        "--x": pos.x ?? '0px',
        "--y": pos.y ?? '0px',
        "--z": pos.z ?? '0px',
        "--w": `${dimensions.width}px` ?? "100px",
        "--h": `${dimensions.height}px` ?? "100px"
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
