import { Location } from "./location";
import { Team } from "./team";
import { Position } from "./position";
import { Velocity } from "./velocity";

export class Player {
    team: Team;
    location: Location;
    position: Position;
    velocity: Velocity;

    hasBall: boolean;

    constructor() {

    }

    getNextMove(){

    }

}