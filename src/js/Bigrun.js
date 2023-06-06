import {Actor, Vector} from "excalibur";
import {Enemy} from "./enemy.js";
import {Towerdefense} from "./towerdefense.js";

export class BigRun extends Enemy {

    // killenemies
    lives = 2

    constructor(posX, posY) {
        super(posX, posY);
        this.vel = new Vector(Math.random() * 150 + 100, 0)
        this.scale = new Vector(0.10, 0.10)





        this.enableCapturePointer = true;
        this.on("pointerdown", () => {
            this.lives -=1
            if(this.lives < 0){
                console.log("kill big")
                this.scene.totalscore()
                this.scene.killenemies()
                this.kill()
            }
        });
    }


}



