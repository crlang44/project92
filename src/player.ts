import { Location } from "./spacial/Location";
import { Team } from "./Team";
import { Velocity } from "./spacial/Velocity";
import { MoveStrategy } from "./strategy/Strategy";
import { UserStrategy } from "./strategy/UserStrategy";
import { AIStrategy } from "./strategy/AIStrategy";
import { Drawable } from "./Drawable";
import { Positions } from "./Positions";

export class Player implements Drawable{
    team: Team;
    locationRelativeToPosition: Location;
    position: Positions;
    velocity: Velocity;
    strategy: MoveStrategy;

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