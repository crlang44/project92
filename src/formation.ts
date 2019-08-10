import { Location } from "./spacial/Location";
import { Position } from "./Position";

export class Formation {
    name: string;
    location: Location;
    positions: Position[];

    constructor(name: string){
        this.name = name;
    }
}