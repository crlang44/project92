import { MoveStrategy } from "./Strategy";
import { Player } from "../player";
import { Velocity } from "../spacial/Velocity";

export class UserStrategy implements MoveStrategy {
    player: Player;

    input: Velocity;

    constructor(player: Player) {
        this.player = player;
        document.addEventListener('keydown', event => this.setInput(event));
    }

    getNextMove() {
        // Take user input
        return this.input;
    }

    setInput(event: any) {
        if (event.keyCode == 119) {
            this.input = new Velocity(0, 1);
        } else if (event.keyCode == 115) {
            this.input = new Velocity(0, -1);
        } else if (event.keyCode == 100) {
            this.input = new Velocity(1, 0);
        } else if (event.keyCode == 97) {
            this.input = new Velocity(-1, 0);
        } else {
            this.input = new Velocity(0, 0);
        }
    }
}