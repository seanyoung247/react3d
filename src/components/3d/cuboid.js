import React from 'react';
import { Object3D, Face3D } from './object3d';

import Styles from './cuboid.module.css';

export default function Cuboid({
    position = {x: 0, y: 0, z: 0}, 
    size = {w:"100px", h: "100px", d: "100px"}, 
    children }) 
{

    return (

        <Object3D dimensions={ {...position, ...size} }>

            <Face3D style={ {"--r" : 0 } } className={ Styles.zside }>
                { children.front }
            </Face3D>

            <Face3D style={ {"--r" : "180deg"} } className={ Styles.zside }>
                { children.back }
            </Face3D>

            <Face3D style={ {"--r": "90deg"} } className={ Styles.xside }>
                { children.right }
            </Face3D>

            <Face3D style={ {"--r": "-90deg"} } className={ Styles.xside }>
                { children.left }
            </Face3D>

            <Face3D style={ {"--r": "90deg"} } className={ Styles.yside }>
                { children.top }
            </Face3D>

            <Face3D style={ {"--r": "-90deg"} } className={ Styles.yside }>
                { children.bottom }
            </Face3D>

        </Object3D>
    );
}