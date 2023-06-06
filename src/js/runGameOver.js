import {Actor, Vector} from "excalibur";
import {Resources} from "./resources.js";

export class RunGameOver extends Actor {

    constructor(posX, posY) {
        super({width: Resources.RunGameOver.width, height: Resources.RunGameOver.height});
        this.pos = new Vector(posX, posY)
        this.vel = new Vector(350, 0)
        this.scale = new Vector(0.05, 0.05)
        this.graphics.use(Resources.RunGameOver.toSprite())
    }

    onPreUpdate(_engine, _delta) {
        if (this.pos.x > 1280) {
            this.pos = new Vector(0, 633)
        }
    }
}

