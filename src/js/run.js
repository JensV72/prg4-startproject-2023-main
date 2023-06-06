import {Actor, Vector} from "excalibur";
import {Enemy} from "./enemy.js";
import {Towerdefense} from "./towerdefense.js";



export class Run extends Enemy {


    constructor(posX, posY) {
        super(posX, posY);
        this.vel = new Vector(Math.random() * 350 + 100, 0)
        this.scale = new Vector(0.05, 0.05)

        this.enableCapturePointer = true;
        this.on("pointerdown", (event) => {
            console.log("kill run")
            this.scene.killenemies()
            this.scene.totalscore()
            this.kill();
        });
    }
}



