import { Ball } from "./Ball";
import { Dimensions } from "./spacial/Dimensions";
import { Goal } from "./Goal";
import { Drawable } from "./Drawable";

export class Field implements Drawable{
    goals: Goal[];
    dimensions: Dimensions;
    ball: Ball;

    constructor(){
        this.dimensions = new Dimensions(120, 80);
    }

    draw(){
        console.log("Drawing field");
        let css =
        `<style>
        .field{
            width: 90vw;
            background-color: green;
            height: 60vh;
        }
        </style>`

        let html = 
        `<div class="field">
        </div>
        `

        document.body.innerHTML = css + html;
    }
}