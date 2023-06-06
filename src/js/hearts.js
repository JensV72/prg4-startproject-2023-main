import {Actor, Vector} from "excalibur";
import {Resources} from "./resources.js";

export class Hearts extends Actor {

    constructor(posX, posY) {
        super();
        this.pos = new Vector(posX, posY)
        this.scale = new Vector(0.1, 0.1)
        this.graphics.use(Resources.Hearts.toSprite())
    }
}