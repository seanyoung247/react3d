import React from 'react';
import Styles from './cuboid.module.css';

/**
 * 
 * @param {*} param0 
 * @returns 
 */
export default function Cuboid({position = {x: 0, y: 0, z: 0}, size = {w:"100px", h: "100px", d: "100px"}, children}) 
{
    const dimensions = {
        "--x": position.x ?? '0px',
        "--y": position.y ?? '0px',
        "--z": position.z ?? '0px',
        "--w": size.w ?? "100px",
        "--h": size.h ?? "100px",
        "--d": size.d ?? "100px"
    };

    return (
        <div id={ Styles.cuboid } style={ dimensions }>
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
        </div>
    );
}