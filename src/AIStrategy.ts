import { Strategy } from "./strategy";
import { Player } from "./player";
import { Velocity } from "./velocity";

export class AIStrategy implements Strategy{
    player: Player;

    constructor(player: Player){
        this.player = player;
    }

    getNextMove(){
        // Make move automatically
        return new Velocity();
    }
}