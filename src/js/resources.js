import { ImageSource, Sound, Resource, Loader } from "excalibur";
import runImage from "../images/gamecaracter.png";
import fishImage from "../images/fish.png";
import backgroundImage from "../images/backgroundgame.webp";
import castleImage from "../images/castlegame.png";
import heartsImage from "../images/hearts.png";
import lasergunImage from "../images/lasercannon.png"
import laserbulletImage from "../images/laserbullet.png"


const Resources = {
    Fish: new ImageSource(fishImage),
    Run : new ImageSource(runImage),
    RunGameOver : new ImageSource(runImage),
    Back : new ImageSource(backgroundImage),
    Castle : new ImageSource(castleImage),
    Hearts : new ImageSource(heartsImage),
    LaserGun : new ImageSource(lasergunImage),
    LaserBullet : new ImageSource(laserbulletImage)
};



const ResourceLoader = new Loader([
    Resources.Fish,
    Resources.Run,
    Resources.Back,
    Resources.Castle,
    Resources.Hearts,
    Resources.RunGameOver,
    Resources.LaserGun,
    Resources.LaserBullet
]);
export { Resources, ResourceLoader };
