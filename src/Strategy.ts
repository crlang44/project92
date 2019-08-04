import { Player } from './Player';
import { Velocity } from './Velocity';

export interface Strategy{
    player: Player;

    getNextMove(): Velocity;
}