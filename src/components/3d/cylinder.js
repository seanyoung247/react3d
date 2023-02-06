
import React from "react";
import { Object3D, Face3D } from './object3d';

import Styles from './cylinder.module.css';

export default function Cylinder({
    position = {x: 0, y: 0, z: 0}, 
    size = {height: "100px", radius: "50px", sides: 8}, 
    children }) {

    

    return (
        <Object3D dimensions={ {...position} }>

        </Object3D>
    );
}
