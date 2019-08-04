import { Ball } from "./Ball";
import { Dimensions } from "./Dimensions";
import { Goal } from "./Goal";
import { Drawable } from "./Drawable";

export class Field implements Drawable{
    goals: Goal[];
    dimensions: Dimensions;
    ball: Ball;

    draw(){
        
    }
}