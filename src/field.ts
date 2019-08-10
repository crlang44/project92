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
        
    }
}