import { Player } from '../Player';
import { Velocity } from '../spacial/Velocity';

export interface MoveStrategy{
    player: Player;

    getNextMove(): Velocity;
}