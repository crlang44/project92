import { Field } from "./Field";
import { Team } from "./Team";
import { Clock } from "./Clock";
import { Side } from "./Side";

export class init {
    field: Field;
    teams: Team[];
    clock: Clock;

    constructor(){
        this.field = new Field();
        this.teams = [new Team(Side.Left), new Team(Side.Right)];
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

