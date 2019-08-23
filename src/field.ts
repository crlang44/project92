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
            background: url(https://i0.wp.com/avantisocceracademy.com/wp-content/uploads/2018/05/soccer-field-wallpaper-high-resolution-38744812.jpg?ssl=1) no-repeat center center fixed;
            -webkit-background-size: cover;
            -moz-background-size: cover;
            -o-background-size: cover;
            background-size: cover;
            height: 100%;
        }
        </style>`

        let html = 
        `<div class="field">
        </div>
        `

        document.body.innerHTML = css + html;
    }
}