export interface Position {
  x: number,
  y: number
}

export type Orientation = "N" | "S" | "E" | "W"

export type Command = "f" | "b" | "l" | "r"

export class Rover {
  constructor(public position: Position, public direction: Orientation) {
  }

  move(commands : Command[]): boolean {
    for(const command of commands){
      switch(command){
        case "f":
          this.position = {x: 1, y: this.position.y+1};
          break;
      }
    }
    return true;
  }
}
