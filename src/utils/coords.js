
/**
 * Models a single point in 3D space
 */
export class Point3D {
    constructor(x, y, z) {
        this._x = x;
        this._y = y;
        this._z = z;
    }

    clone() {
        return new Point3D(this._x, this._y, this._z);
    }

    copy(point) {
        this._x = point._x;
        this._y = point._y;
        this._z = point._z;
    }

    /* Property accessors */
    get x() { return this._x; }
    set x(x) { this._x = x; }
    get y() { return this._y; }
    set y(y) { this._y = y; }
    get z() { return this._z; }
    set z(z) { this._z = z; }

    /**
     * Returns the euclidean distance between two points.
     * @param {Point3D} point 
     * @returns 
     */
    distanceTo(point) {
        const x = point._x - this._x;
        const y = point._y - this._y;
        const z = point._z - this._z;
        return Math.sqrt( (x * x) + (y * y) + (z * z) );
    }
}




/**
 * Converts world coordinates to CSS values.
 * World coordinates are right-handed y-up.
 * World coordinates are currently assumed to be a 1:1 mapping with pixels.
 * CSS values are returned in pixels.
 * @param {*} coords 
 */
export function worldToCss(coords = {x:0, y:0, z: 0}) {
    return {
        x: `${-coords.x}px`,
        y: `${coords.y}px`,
        z: `${-coords.z}px`
    };
}

/**
 * Converts CSS values to world coordinates.
 * CSS coordinates are assumed to be provided in pixels.
 * World coordinates are right-handed y-up.
 * World coordinates are currently assumed to be a 1:1 mapping with pixels.
 * @param {*} coords 
 */
export function cssToWorld(coords = {x: 0, y: 0, z: 0}) {
    return {
        x: -parseFloat(coords.x),
        y: parseFloat(coords.y),
        z: -parseFloat(coords.z)
    };
}

/**
 * Converts world rotations to CSS values.
 * World rotations are right-handed y-up radians.
 * CSS rotations are returned in radians.
 * @param {*} axes 
 */
export function rotationToCss(axes = {rX: 0, rY: 0, rZ: 0}) {
    return {
        rX: `${axes.rX}rad`,
        rY: `${-axes.rY}rad`,
        rZ: `${axes.rZ}rad`
    };
}

/**
 * Converts CSS values to world rotations.
 * CSS Rotations are assumed to be in radians.
 * World rotations are right-handed y-up radians.
 * @param {*} axes 
 */
export function cssToRotation(axes = {rX: 0, rY: 0, rZ: 0}) {
    return {
        rX: parseFloat(axes.rX),
        rY: -parseFloat(axes.rY),
        rZ: parseFloat(axes.rZ)
    };
}