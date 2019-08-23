import { Location } from "./spacial/Location";
import { Team } from "./Team";
import { Velocity } from "./spacial/Velocity";
import { MoveStrategy } from "./strategy/Strategy";
import { UserStrategy } from "./strategy/UserStrategy";
import { AIStrategy } from "./strategy/AIStrategy";
import { Drawable } from "./Drawable";
import { PositionTypes } from "./PositionTypes";
import { Field } from "./Field";

export class Player implements Drawable{
    team: Team;
    locationRelativeToPosition: Location;
    position: PositionTypes;
    velocity: Velocity;
    strategy: MoveStrategy;

    hasBall: boolean;

    constructor(position: PositionTypes) {
        this.position = position;
        this.strategy = new UserStrategy(this);
    }

    getNextMove(){
        this.strategy.getNextMove();
    }

    activateUserControl(){
        this.strategy = new UserStrategy(this);
    }

    activateAI(){
        this.strategy = new AIStrategy(this);
    }

    draw(){
        let field = document.getElementsByClassName('field')[0];
        let player = document.createElement('div');
        player.classList.add('player');
        
        if(field.getElementsByClassName('player').length === 0){
            console.log("Drawing player");
            let css =
            `<style>
            .player{
                position: relative;
                top: 50%;
                left: 50%;
                width: 20px;
                height: 20px;
                border-radius: 20px;
                background-color: red;
            }
            </style>`

            let html = 
            `<div class="player">
            </div>
            `

            document.head.innerHTML += css;
            field.appendChild(player);
        }
    }

}