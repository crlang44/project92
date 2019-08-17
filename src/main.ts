import { Field } from "./Field";
import { Team } from "./Team";
import { Clock } from "./Clock";
import { Side } from "./Side";
import { PositionTypes } from "./PositionTypes";
import { Formation } from "./Formation";
import { Player } from "./Player";
import { Location } from "./spacial/Location";
import { Position } from "./Position";

export class init {
    field: Field;
    teams: Team[] = [];
    clock: Clock;

    constructor() {
        this.field = new Field();
        this.clock = new Clock();
        this.teams.push(this.createTeam(Side.Left));

        setTimeout(this.field.draw, 0);

        this.kickoff();
    }

    kickoff(): void {
        this.clock.start(this.play.bind(this));
    }

    play(): void {
        // This is where all the action happens, this get executed every time step.
        
    }

    createTeam(side: Side): Team {
        let team = new Team(side);
        team.players = this.createPlayers();
        team.formation = this.createFormation(side);

        let unfilledPositions = [];
        for (let currentPosition of team.formation.positions) {
            let playersMatchingCurrentPosition = team.players.filter(player => player.position === currentPosition.type);
            if(playersMatchingCurrentPosition.length > 0){
                currentPosition.player = playersMatchingCurrentPosition[0];
                currentPosition.player.locationRelativeToPosition = new Location(0,0);
            }else{
                unfilledPositions.push(currentPosition);
            }
        }
        return team;
    }

    createFormation(side: Side): Formation {
        let formation = new Formation("4_4_2");
        formation.positions.push(new Position(PositionTypes.Goalkeeper, new Location(-30, 0)));
        formation.positions.push(new Position(PositionTypes.Right_Fullback, new Location(-10, -10)));
        formation.positions.push(new Position(PositionTypes.Left_Fullback, new Location(-10, 10)));
        formation.positions.push(new Position(PositionTypes.Center_Back_1, new Location(-10, -5)));
        formation.positions.push(new Position(PositionTypes.Center_Back_2, new Location(-10, 5)));
        formation.positions.push(new Position(PositionTypes.Defending_Mid, new Location(0, -5)));
        formation.positions.push(new Position(PositionTypes.Right_Mid, new Location(10, -10)));
        formation.positions.push(new Position(PositionTypes.Central_Mid, new Location(0, -10)));
        formation.positions.push(new Position(PositionTypes.Striker, new Location(10, 10)));
        formation.positions.push(new Position(PositionTypes.Attacking_Mid, new Location(0, 5)));
        formation.positions.push(new Position(PositionTypes.Left_Mid, new Location(0, 10)));

        return formation;
    }

    createPlayers(): Player[] {
        let players: Player[] = [];
        players.push(new Player(PositionTypes.Goalkeeper));
        players.push(new Player(PositionTypes.Right_Fullback));
        players.push(new Player(PositionTypes.Left_Fullback));
        players.push(new Player(PositionTypes.Center_Back_1));
        players.push(new Player(PositionTypes.Center_Back_2));
        players.push(new Player(PositionTypes.Defending_Mid));
        players.push(new Player(PositionTypes.Right_Mid));
        players.push(new Player(PositionTypes.Central_Mid));
        players.push(new Player(PositionTypes.Striker));
        players.push(new Player(PositionTypes.Attacking_Mid));
        players.push(new Player(PositionTypes.Left_Mid));
        return players;
    }

}

new init();

