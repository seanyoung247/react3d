import React from 'react';
import Object3D from './object3d';

import Styles from './cuboid.module.css';

export default function Cuboid({
    position = {x: 0, y: 0, z: 0}, 
    size = {w:"100px", h: "100px", d: "100px"}, 
    children }) 
{

    return (

        <Object3D dimensions={ {...position, ...size} }>

            <div style={ {"--r" : 0 } } className={ Styles.zside }>
                { children.front }
            </div>

            <div style={ {"--r" : "180deg"} } className={ Styles.zside }>
                { children.back }
            </div>

            <div style={ {"--r": "90deg"} } className={ Styles.xside }>
                { children.right }
            </div>

            <div style={ {"--r": "-90deg"} } className={ Styles.xside }>
                { children.left }
            </div>

            <div style={ {"--r": "90deg"} } className={ Styles.yside }>
                { children.top }
            </div>

            <div style={ {"--r": "-90deg"} } className={ Styles.yside }>
                { children.bottom }
            </div>

        </Object3D>
    );
}