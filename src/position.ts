import { Location } from './spacial/Location';
import { PositionTypes } from './PositionTypes';
import { Player } from './Player';

export class Position {
    type: PositionTypes;
    player: Player;
    locationRelativeToFormation: Location;

    constructor(type: PositionTypes, location: Location){
        this.type = type;
        this.locationRelativeToFormation = location;
    }
}