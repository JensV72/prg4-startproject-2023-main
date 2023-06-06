import {Actor, Vector} from "excalibur";
import {Resources} from "./resources.js";
import {Towerdefense} from "./towerdefense.js";

export class Enemy extends Actor {

    // killenemies

    constructor(posX, posY) {
        super({width:Resources.Run.width ,height:Resources.Run.height});
        this.pos = new Vector(posX, posY)
    }

    onInitialize(_engine) {
        this.graphics.use(Resources.Run.toSprite())
    }

    onPreUpdate(engine) {
        if(this.pos.x > 1110) {
            console.log("killed by castle")
            engine.currentScene.walkintocastle()
            this.scene.killenemies()
            this.kill()
        }
    }

}



