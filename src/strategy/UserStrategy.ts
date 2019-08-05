import { MoveStrategy } from "./Strategy";
import { Player } from "../player";
import { Velocity } from "../spacial/Velocity";

export class UserStrategy implements MoveStrategy{
    player: Player;

    constructor(player: Player){
        this.player = player;
    }

    getNextMove(){
        // Take user input
        return new Velocity();
    }
}