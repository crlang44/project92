import { Ball } from "./ball";
import { Dimensions } from "./dimensions";
import { Goal } from "./goal";

export class Field{
    goals: Goal[];
    dimensions: Dimensions;
    ball: Ball;
}