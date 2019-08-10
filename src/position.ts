import { Location } from './spacial/Location';
import { PositionTypes } from './PositionTypes';

export class Position {
    type: PositionTypes;
    locationRelativeToFormation: Location;

    constructor(type: PositionTypes, location: Location){
        this.type = type;
        this.locationRelativeToFormation = location;
    }
}