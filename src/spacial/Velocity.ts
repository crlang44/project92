import { Spacial } from "./Spacial";

export class Velocity extends Spacial{
    speed: number;

    isZero(){
        return this.x === 0 && this.y === 0;
    }
}