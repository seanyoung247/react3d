import React from 'react';
import Object3D from './object3d';

import Styles from './cuboid.module.css';

export default function Cuboid({
    position = {x: 0, y: 0, z: 0}, 
    size = {w:"100px", h: "100px", d: "100px"}, 
    children }) 
{

    return (

        <Object3D dimensions={ {...position, ...size} } className={ Styles.cuboid }>

            <div id={ Styles.front } className={ Styles.side }>
                { children.front }
            </div>

            <div id={ Styles.back } className={ Styles.side }>
                { children.back }
            </div>

            <div id={ Styles.left } className={ Styles.side }>
                { children.left }
            </div>

            <div id={ Styles.right } className={ Styles.side }>
                { children.right }
            </div>

            <div id={Styles.top} className={ Styles.side }>
                { children.top }
            </div>

            <div id={ Styles.bottom } className={ Styles.side }>
                { children.bottom }
            </div>

        </Object3D>
    );
}