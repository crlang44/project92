import { Goalie } from "./positions/goalie";

import { Formation } from "./formation";

import { Point } from "./point";

export class Team{
    goalie: Goalie;
    formation: Formation;
    midpoint: Point;
    direction: "Left" | "Right";

    advance(){

    }

    retreat(){

    }

    shiftLeft(){

    }

    shiftRight(){
    }
}