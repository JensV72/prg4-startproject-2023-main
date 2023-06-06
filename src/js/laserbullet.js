import {Actor, Vector} from "excalibur";
import {Resources} from "./resources.js";

export class Laserbullet extends Actor {

    constructor(posX, posY) {
        super();
        this.vel = new Vector(-600, 100)
        this.pos = new Vector(posX, posY)
        this.scale = new Vector(0.1, 0.1)
        this.graphics.use(Resources.LaserBullet.toSprite())
    }

}