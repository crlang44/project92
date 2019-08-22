import { Location } from "./spacial/Location";
import { Team } from "./Team";
import { Velocity } from "./spacial/Velocity";
import { MoveStrategy } from "./strategy/Strategy";
import { UserStrategy } from "./strategy/UserStrategy";
import { AIStrategy } from "./strategy/AIStrategy";
import { Drawable } from "./Drawable";
import { PositionTypes } from "./PositionTypes";

export class Player implements Drawable{
    team: Team;
    locationRelativeToPosition: Location;
    position: PositionTypes;
    velocity: Velocity;
    strategy: MoveStrategy;

    hasBall: boolean;

    constructor(position: PositionTypes) {
        this.position = position;
        this.strategy = new UserStrategy(this);
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