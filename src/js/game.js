import { Actor, Engine, Vector, Label, Color, Font } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import {Towerdefense} from "./towerdefense.js"
import {GameOver} from "./gameover.js"
import {Startscherm} from "./startscherm.js";

export class Game extends Engine {


    constructor() {
        super({width: 1280, height: 715});
        this.start(ResourceLoader).then(() => this.startGame());
        // this.showDebug(true);
    }

    startGame() {
        this.addScene('startscherm', new Startscherm())
        this.addScene('towerdefense', new Towerdefense())
        this.addScene('gameover', new GameOver())

        this.goToScene('startscherm')
    }
}


new Game();
