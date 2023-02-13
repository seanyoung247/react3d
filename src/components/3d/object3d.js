
import React from "react";

import { worldToCss, rotationToCss } from '../../utils/coords.js';
import { classList } from '../../utils/classlist.js';

import './object3d.css';

/**
 * Models a world object, and manages it's position and location.
 */
export class WorldObject {

}

/**
 * Creates a 3D element
 */
export function Object3D({dimensions, rotation, style, className, children}) {

    const pos = worldToCss(dimensions);
    const rot = rotationToCss({rX: rotation.x, rY: rotation.y, rZ: rotation.z});

    const obj = {
        "--pX": pos.x ?? '0px',
        "--pY": pos.y ?? '0px',
        "--pZ": pos.z ?? '0px',
        "--rX": rot.rX ?? '0px',
        "--rY": rot.rY ?? '0px',
        "--rZ": rot.rZ ?? '0px',
        "--w": `${dimensions.width}px` ?? "100px",
        "--h": `${dimensions.height}px` ?? "100px"
    };

    return (
        <div style={ {...style, ...obj} } className={ classList("object3d", className) }>
            { children }
        </div>
    );
}

/**
 * Creates a single face of a 3D element
 */
export function Face3D({style, className, children}) {
    return (
        <div style={ style } className={ classList('face3d', className) }>
            { children }
        </div>
    )
}
