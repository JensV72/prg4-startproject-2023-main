import {Actor, Vector, Scene, Label, vec, Font, FontUnit, TextAlign, BaseAlign} from "excalibur";
import {Resources} from "./resources.js";
import {RunGameOver} from "./runGameOver.js";



export class GameOver extends Scene {

    run
    game

    onInitialize(engine) {
        this.game = engine
        const background = new Actor({
            anchor: new Vector(0, 0),
            pos: new Vector(0, 0),
            scale: new Vector(0.53, 0.5),
        });
        background.graphics.use(Resources.Back.toSprite());
        this.add(background);

        for (let i = 0; i <= 5; i += 1) {
            let xpos = i * 400 + Math.random() * 200
            this.run = new RunGameOver(0 - xpos, 633)
            this.add(this.run);
        }
        console.log(this.run.pos)


        const gameover = new Label({

            text: 'GAME OVER',
            pos: vec(640, 357.5),
            font: new Font({
                family: 'impact',
                size: 200,
                unit: FontUnit.Px,
                textAlign: TextAlign.Center,
                baseAlign: BaseAlign.Middle
            })
        });
        this.add(gameover)

        const restart = new Label({
            width: 100,
            height: 50,
            text: 'Restart',
            pos: vec(640, 550),
            font: new Font({
                family: 'impact',
                size: 30,
                unit: FontUnit.Px,
                textAlign: TextAlign.Center,
                baseAlign: BaseAlign.Middle
            })
        });
        this.add(restart)

        restart.on("pointerdown", (event) => {
            this.game.goToScene("startscherm")
        });
    }









}
