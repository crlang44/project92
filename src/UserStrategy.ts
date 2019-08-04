import { Strategy } from "./strategy";
import { Player } from "./player";
import { Velocity } from "./velocity";

export class UserStrategy implements Strategy{
    player: Player;

    constructor(player: Player){
        this.player = player;
    }

    getNextMove(){
        // Take user input
        return new Velocity();
    }
}