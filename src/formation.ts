import { Forward } from "./positions/forward";
import { Midfielder } from "./positions/midfielder";
import { Defender } from "./positions/defender";
import { Point } from "./point";

export class Formation {
    forwards: Forward[];
    midfielders: Midfielder[];
    defenders: Defender[];
    midpoint: Point;

    constructor(){

    }

    get players(){
        return [...this.forwards, ...this.midfielders, ...this.defenders];
    }

    startWithBall() {
        throw new Error("Method not implemented.");
    }
}