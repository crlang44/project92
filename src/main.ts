import { Field } from "./field";
import { Team } from "./team";
import { Clock } from "./clock";
import { Side } from "./side";

export class init {
    field: Field;
    teams: Team[];
    clock: Clock;

    constructor(){
        this.field = new Field();
        this.teams = [new Team(Side.Home), new Team(Side.Away)];
        this.clock = new Clock();
        this.kickoff();
    }

    kickoff(){
        this.teams[this.flipCoin()].formation.startWithBall();
        this.clock.start(this.play);
    }

    play(){
        // This is where all the action happens, this get executed every time step.
        this.teams.forEach(team => team.play());
    }

    flipCoin(): number {
        return Math.round(Math.random());
    }

}

