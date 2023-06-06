import {Actor, Vector} from "excalibur";
import {Resources} from "./resources.js";
import {Lasergun} from "./lasergun.js";

export class Castle extends Actor {

    constructor(posX, posY) {
        super();
        this.pos = new Vector(posX, posY)
        this.scale = new Vector(0.35, 0.35)
        this.graphics.use(Resources.Castle.toSprite())

    }

    onInitialize(engine) {
        this.laserGun = new Lasergun(this.pos.x, 470)
        engine.currentScene.add(this.laserGun)
    }
}
