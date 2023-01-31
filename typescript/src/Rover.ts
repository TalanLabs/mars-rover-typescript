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
    continue: boolean
}

export type Command = "f" | "b" | "l" | "r"

export class Rover {
    constructor(public position: Position, public direction: OrientationEnum, public worldMap: WorldMap) {
    }

    public move(commands: Command[]): RoverResult {
        for (const command of commands) {
            switch (command) {
                case "f":
                    let forward: RoverResult = {} as RoverResult
                    switch (this.direction) {
                        case OrientationEnum.N:
                            forward = this.getNextPositionResult(this.position.y + 1 , 'y')
                            break
                        case OrientationEnum.S:
                            forward = this.getNextPositionResult(this.position.y - 1 , 'y')
                            break
                        case OrientationEnum.E:
                            forward = this.getNextPositionResult(this.position.x + 1 , 'x')
                            break
                        case OrientationEnum.W:
                            forward = this.getNextPositionResult(this.position.x - 1 , 'x')
                            break
                    }
                    if(!forward.continue) {
                        return forward;
                    }
                    this.position = forward.position;
                    break;
                case "b":
                    let backward: RoverResult = {} as RoverResult
                    switch (this.direction) {
                        case OrientationEnum.N:
                            backward = this.getNextPositionResult(this.position.y - 1, 'y')
                            break
                        case OrientationEnum.S:
                            backward = this.getNextPositionResult(this.position.y + 1, 'y')
                            break
                        case OrientationEnum.E:
                            backward = this.getNextPositionResult(this.position.x - 1, 'x')
                            break
                        case OrientationEnum.W:
                            backward = this.getNextPositionResult(this.position.x + 1, 'x')
                            break
                    }
                    if(!backward.continue) {
                        return backward;
                    }
                    this.position = backward.position
                    break;
                case "l": case "r":
                    this.turn(command);
                    break
            }
        }
        return {message: 'commands done', position: this.position, continue: false}
    }

    private turn(command: 'l' | 'r') {
        switch (command) {
            case "l":
                this.turnLeft()
                break
            case "r":
                this.turnRight()
                break
        }
    }

    private turnLeft() {
        const previousIndex = Object.values(OrientationEnum).indexOf(this.direction);
        const nextIndex = (previousIndex - 1) < 0 ? (previousIndex - 1 + 4) % 4 : (previousIndex - 1) % 4
        this.direction = Object.values(OrientationEnum)[nextIndex]
    }

    private turnRight() {
        const previousIndex = Object.values(OrientationEnum).indexOf(this.direction);
        const nextIndex = (previousIndex + 1) % 4
        this.direction = Object.values(OrientationEnum)[nextIndex]
    }

    private detectObstacle(newPosition: Position): boolean {
        return this.worldMap.rocks.find(p => p.y === newPosition.y && p.x === newPosition.x) != undefined
    }

    private getNextPositionResult(newCoordinate: number, axis: 'x' | 'y'): RoverResult {
        const position = this.position;
        let nextPosition = {...this.position};
        switch (axis) {
            case "x":
                if (newCoordinate > this.worldMap.width) {
                    nextPosition.x = newCoordinate - this.worldMap.width
                } else if (newCoordinate <= 0) {
                    nextPosition.x = this.worldMap.width - newCoordinate
                } else {
                    nextPosition.x = newCoordinate
                }
                break
            case "y":
                if (newCoordinate > this.worldMap.height) {
                    nextPosition.y =  newCoordinate - this.worldMap.height
                } else if (newCoordinate <= 0) {
                    nextPosition.y =  this.worldMap.height - newCoordinate
                } else {
                    nextPosition.y = newCoordinate
                }
                break
        }
        if(this.detectObstacle(nextPosition)) {
            return {message: 'rock encountered', position, continue: false}
        }
        return {message: 'next command', position: nextPosition, continue: true}
    }
}
