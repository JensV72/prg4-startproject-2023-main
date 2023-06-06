import {Actor, Vector} from "excalibur";
import {Resources} from "./resources.js";
import {Laserbullet} from "./laserbullet.js";

export class Lasergun extends Actor {

    isShooting
    constructor(posX, posY) {
        super();
        this.pos = new Vector(posX, posY)
        this.scale = new Vector(-0.1, 0.1)
        this.graphics.use(Resources.LaserGun.toSprite())
    }

    onInitialize(engine) {


        engine.input.pointers.primary.on('down' ,(event)=>{
            this.isShooting = true
        });
        engine.input.pointers.primary.on('up' ,(event)=>{
            this.isShooting = false
        });
}

onPreUpdate(engine, _delta) {
    if(this.isShooting){
        engine.currentScene.add(new Laserbullet(this.pos.x-49, this.pos.y-17))
    }
}
}
