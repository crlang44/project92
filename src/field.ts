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
            width: 100vw;
            height: 100vh;
            background-image: url(https://i0.wp.com/avantisocceracademy.com/wp-content/uploads/2018/05/soccer-field-wallpaper-high-resolution-38744812.jpg?ssl=1);
            background-size: contain;
            margin: auto;
            transform: rotateX(10deg) translateZ(-200px);
            animation: x-axis-animation 10s ease-in-out 0s infinite alternate;
        }

        @keyframes x-axis-animation {
            from {transform: translateX(200px) rotateX(10deg) translateZ(-200px)}
            to {transform: translateX(-200px) rotateX(10deg) translateZ(-200px)}
          }
        </style>`

        let html = 
        `<div class="field">
        </div>
        `

        document.body.innerHTML = css + html;
    }
}