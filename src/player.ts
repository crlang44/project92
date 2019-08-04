import { Location } from "./Location";
import { Team } from "./Team";
import { Position } from "./Position";
import { Velocity } from "./Velocity";
import { Strategy } from "./Strategy";
import { UserStrategy } from "./UserStrategy";
import { AIStrategy } from "./AIStrategy";
import { Drawable } from "./Drawable";

export class Player implements Drawable{
    team: Team;
    location: Location;
    position: Position;
    velocity: Velocity;
    strategy: Strategy;

    hasBall: boolean;

    constructor() {

    }

    getNextMove(){
        this.strategy.getNextMove();
    }

    activateUserControl(){
        this.strategy = new UserStrategy(this);
    }

    activateAI(){
        this.strategy = new AIStrategy(this);
    }

    draw(){
        
    }

}