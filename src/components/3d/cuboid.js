import React from 'react';
import Styles from './cuboid.module.css';

/**
 * Generates a 3D cuboid from html primatives using css transforms
 */
export default function Cuboid({
    width="100px", height="100px", depth="100px",
    front, back, left, right, top, bottom
}) 
{
    return (
        <div id={Styles.cuboid} style={{
            "--width": width,
            "--height": height,
            "--depth": depth
        }}>
            <div id={Styles.front} className={Styles.side}>
                {front}
            </div>
            <div id={Styles.back} className={Styles.side}>
                {back}
            </div>
            <div id={Styles.left} className={Styles.side}>
                {left}
            </div>
            <div id={Styles.right} className={Styles.side}>
                {right}
            </div>
            <div id={Styles.top} className={Styles.side}>
                {top}
            </div>
            <div id={Styles.bottom} className={Styles.side}>
                {bottom}
            </div>
        </div>
    );
}