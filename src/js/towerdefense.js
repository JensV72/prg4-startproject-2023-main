import {Actor, Vector, Scene, Random, Timer, Label, vec, Font, FontUnit, TextAlign, BaseAlign} from "excalibur";
import {Resources} from "./resources.js";
import {Castle} from "./castle.js";
import {Hearts} from "./hearts.js";
import {Run} from "./run.js";
import {BigRun} from "./Bigrun.js";



export class Towerdefense extends Scene {

    castle
    scorelabel
    score = 0
    lives = 3
    game
    enemies = 0
    enemies1 = 10
    enemies2 = 3

    onInitialize(engine) {
        this.game = engine
    }

    buildLevel(){

        const background = new Actor({
            anchor: new Vector(0, 0),
            pos: new Vector(0, 0),
            scale: new Vector(0.53, 0.5),
        });
        background.graphics.use(Resources.Back.toSprite());
        this.add(background);

        this.scorelabel = new Label({

            text: '0',
            pos: vec(1220, 80),
            font: new Font({
                family: 'impact',
                size: 35,
                unit: FontUnit.Px,
                textAlign: TextAlign.Center,
                baseAlign: BaseAlign.Middle
            })
        });
        this.add(this.scorelabel)

        const score = new Label({

            text: 'score:',
            pos: vec(1160, 80),
            font: new Font({
                family: 'impact',
                size: 35,
                unit: FontUnit.Px,
                textAlign: TextAlign.Center,
                baseAlign: BaseAlign.Middle
            })
        });
        this.add(score)

        this.castle = new Castle(1160, 509)
        this.add(this.castle);


    }


    onActivate(_context) {

        this.lives = 3
        this.score = 0
        this.enemies = 0
        this.enemies1 = 10
        this.enemies2 = 3
        this.buildLevel()
        this.createhearts()

        this.createEnemies()

        this.enemies = this.enemies1 + this.enemies2
    }

    onDeactivate(_context) {
        this.clear()
    }

    onPostUpdate() {
        this.scorelabel.text = this.score + ""
    }

    totalscore(){
        this.score +=1
    }

    createhearts() {

        this.hearts = new Hearts(100, 80)
        this.add(this.hearts)

        this.hearts1 = new Hearts(180, 80)
        this.add(this.hearts1)

        this.hearts2 = new Hearts(260, 80)
        this.add(this.hearts2)
    }

    killenemies(){
        this.enemies -=1

        if (this.enemies <= 0) {
            console.log("No more enemies!")

            this.enemies1 += 3
            this.enemies2 += 1
            this.enemies = this.enemies1 + this.enemies2

            this.createEnemies()
        }
        console.log(this.enemies)
    }

    createEnemies() {
        console.log("create enemies")

        for (let i = 0; i < this.enemies1; i++) {
            const run = new Run(0, 633)
            this.add(run);
        }

        for (let i = 0; i < this.enemies2; i++) {
            const bigrun = new BigRun(0,615)
            this.add(bigrun)
        }
    }

    walkintocastle() {
        this.lives -= 1

        if (this.lives === 2) {
            this.hearts2.kill()
        } else if(this.lives === 1){
            this.hearts1.kill()
        }else if(this.lives === 0){
            this.hearts.kill()
        }
        this.checkGameover()
    }

    checkGameover() {
        if (this.lives < 0) {
            this.game.goToScene("gameover")
        }


    }
}

