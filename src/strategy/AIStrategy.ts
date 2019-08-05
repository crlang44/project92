import { MoveStrategy } from "./Strategy";
import { Player } from "../player";
import { Velocity } from "../spacial/Velocity";

export class AIStrategy implements MoveStrategy{
    player: Player;

    constructor(player: Player){
        this.player = player;
    }

    getNextMove(){
        // Make move automatically
        return new Velocity();
    }
}