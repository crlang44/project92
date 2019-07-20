import { Goalie } from "./positions/goalie";

import { Formation } from "./formation";

import { Point } from "./point";
import { Side } from "./side";

export class Team{

    goalie: Goalie;
    formation: Formation;
    midpoint: Point;
    side: Side;

    play(){

    }

    hasBall(){
        this.formation.players.forEach(player => {
            if(player.hasBall){
                return true;
            }
        });
        return false;
    }
    
}