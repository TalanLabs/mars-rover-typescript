export interface Position {
    x: number,
    y: number
}

export enum OrientationEnum {
    N = 'N',
    E = 'E',
    S = 'S',
    W = 'W'
}

export interface WorldMap {
    height: number;
    width: number;
    rocks: Position[];
}

export interface RoverResult {
    message: string,
    position: Position,
}

export type Command = "f" | "b" | "l" | "r"

export class Rover {
    constructor(public position: Position, public direction: OrientationEnum, public worldMap: WorldMap) {
    }

    public move(commands: Command[]): RoverResult {
        return {message: 'commands done', position: this.position}
    }
}
