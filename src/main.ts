import { Player } from "./player";
import { Field } from "./field";
import { Team } from "./team";
import { Clock } from "./clock";

export class init {
    field: Field;
    teams: Team[];
    clock: Clock;

    constructor(){
        this.field = new Field();
        this.teams = [new Team(), new Team()];
        this.clock = new Clock();
        this.kickoff();
    }

    kickoff(){
        this.clock.start(this.play);
    }

    play(){
        //
    }

}

