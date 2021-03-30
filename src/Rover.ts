export interface Position {
    x: number,
    y: number
}

type Orientation = "N" | "S" | "E" | "W"

export class Rover {
    constructor(public position: Position, public direction: Orientation) {
    }

}