import {Command, OrientationEnum, Position, Rover} from "./Rover";

describe('test suite', () => {
    const worldMap = {
        height: 5,
        width: 5,
        rocks: [{x: 2, y:3}]
    }
    test('rover accept a list of one command forward (facing north)', ()=> {
        // Given
        const position: Position = {x: 1, y: 1}
        const direction: OrientationEnum = OrientationEnum.N;
        const rover = new Rover(position, direction, worldMap);

        const command: Command = 'f';
        const commands : Command[] = [command]

        // When
        const result = rover.move(commands)

        // Then
        expect(result.message).toBe("commands done")
        expect(rover.position).toEqual({x: 1, y: 2})
        expect(rover.direction).toBe(OrientationEnum.N)
    })
    test('rover accept a list of one command backward (facing north)', ()=> {
        // Given
        const position: Position = {x: 1, y: 1}
        const direction: OrientationEnum = OrientationEnum.N;
        const rover = new Rover(position, direction, worldMap);

        const command: Command = 'b';
        const commands : Command[] = [command]

        // When
        const result = rover.move(commands)

        // Then
        expect(result.message).toBe("commands done")
        expect(rover.position).toEqual({x: 1, y: 5})
        expect(rover.direction).toBe(OrientationEnum.N)
    })
    test('rover accept a list of one command forward (facing south)', ()=> {
        // Given
        const position: Position = {x: 1, y: 1}
        const direction: OrientationEnum = OrientationEnum.S;
        const rover = new Rover(position, direction, worldMap);

        const command: Command = 'f';
        const commands : Command[] = [command]

        // When
        const result = rover.move(commands)

        // Then
        expect(result.message).toBe('commands done')
        expect(rover.position).toEqual({x: 1, y: 5})
        expect(rover.direction).toBe(OrientationEnum.S)
    })
    test('rover accept a list of one command backward (facing south)', ()=> {
        // Given
        const position: Position = {x: 1, y: 1}
        const direction: OrientationEnum = OrientationEnum.S;
        const rover = new Rover(position, direction, worldMap);

        const command: Command = 'b';
        const commands : Command[] = [command]

        // When
        const result = rover.move(commands)

        // Then
        expect(result.message).toBe('commands done')
        expect(rover.position).toEqual({x: 1, y: 2})
        expect(rover.direction).toBe(OrientationEnum.S)
    })
    test('rover accept a list of one command forward (facing west)', ()=> {
        // Given
        const position: Position = {x: 1, y: 1}
        const direction: OrientationEnum = OrientationEnum.W;
        const rover = new Rover(position, direction, worldMap);

        const command: Command = 'f';
        const commands : Command[] = [command]

        // When
        const result = rover.move(commands)

        // Then
        expect(result.message).toBe("commands done")
        expect(rover.position).toEqual({x: 5, y: 1})
        expect(rover.direction).toBe(OrientationEnum.W)
    })
    test('rover accept a list of one command backward (facing west)', ()=> {
        // Given
        const position: Position = {x: 1, y: 1}
        const direction: OrientationEnum = OrientationEnum.W;
        const rover = new Rover(position, direction, worldMap);

        const command: Command = 'b';
        const commands : Command[] = [command]

        // When
        const result = rover.move(commands)

        // Then
        expect(result.message).toBe("commands done")
        expect(rover.position).toEqual({x: 2, y: 1})
        expect(rover.direction).toBe(OrientationEnum.W)
    })
    test('rover accept a list of one command forward (facing east)', ()=> {
        // Given
        const position: Position = {x: 1, y: 1}
        const direction: OrientationEnum = OrientationEnum.E;
        const rover = new Rover(position, direction, worldMap);

        const command: Command = 'f';
        const commands : Command[] = [command]

        // When
        const result = rover.move(commands)

        // Then
        expect(result.message).toBe("commands done")
        expect(rover.position).toEqual({x: 2, y: 1})
        expect(rover.direction).toBe(OrientationEnum.E)
    })
    test('rover accept a list of one command backward (facing east)', ()=> {
        // Given
        const position: Position = {x: 1, y: 1}
        const direction: OrientationEnum = OrientationEnum.E;
        const rover = new Rover(position, direction, worldMap);

        const command: Command = 'b';
        const commands : Command[] = [command]

        // When
        const result = rover.move(commands)

        // Then
        expect(result.message).toBe("commands done")
        expect(rover.position).toEqual({x: 5, y: 1})
        expect(rover.direction).toBe(OrientationEnum.E)
    })
    // turn
    test('rover accept a list of one command left', ()=> {
        // Given
        const position: Position = {x: 1, y: 1}
        const direction: OrientationEnum = OrientationEnum.N;
        const rover = new Rover(position, direction, worldMap);

        const command: Command = 'l';
        const commands : Command[] = [command]

        // When
        const result = rover.move(commands)

        // Then
        expect(result.message).toBe("commands done")
        expect(rover.position).toEqual({x: 1, y: 1})
        expect(rover.direction).toBe(OrientationEnum.W)
    })
    test('rover accept a list of one command right', ()=> {
        // Given
        const position: Position = {x: 1, y: 1}
        const direction: OrientationEnum = OrientationEnum.N;
        const rover = new Rover(position, direction, worldMap);

        const command: Command = 'r';
        const commands : Command[] = [command]

        // When
        const result = rover.move(commands)

        // Then
        expect(result.message).toBe('commands done')
        expect(rover.position).toEqual({x: 1, y: 1})
        expect(rover.direction).toBe(OrientationEnum.E)
    })
    // multiple commands
    test('rover should accept a list of commands', () => {
        // Given
        const position: Position = {x: 1, y: 1}
        const direction: OrientationEnum = OrientationEnum.N;
        const rover = new Rover(position, direction, worldMap);

        const commands : Command[] = ['f', 'l', 'f', 'f', 'r', 'b']

        // When
        const result = rover.move(commands)

        // Then
        expect(result.message).toBe("commands done")
        expect(rover.position).toEqual({x: 4, y: 1})
        expect(rover.direction).toBe(OrientationEnum.N)
    })
    // edges
    test('at edges, rover "cross" the map', () => {
        // Given
        const position: Position = {x: 5, y: 5}
        const direction: OrientationEnum = OrientationEnum.N;
        const rover = new Rover(position, direction, worldMap);

        const command: Command = 'f';
        const commands : Command[] = [command]

        // When
        const result = rover.move(commands)

        // Then
        expect(result.message).toBe("commands done")
        expect(rover.position).toEqual({x: 5, y: 1})
        expect(rover.direction).toBe(OrientationEnum.N)
    })
    // obstacle detection
    test('rover should stop if he encounter an obstacle, and send back a report', () => {
        // Given
        const position: Position = {x: 1, y: 1}
        const direction: OrientationEnum = OrientationEnum.N;
        const rover = new Rover(position, direction, worldMap);

        const commands : Command[] = ['f', 'f', 'r', 'f', 'r']

        // When
        const result = rover.move(commands)

        // Then
        expect(result.message).toBe('rock encountered')
        expect(result.position).toStrictEqual({x: 1, y: 3})
        expect(rover.position).toEqual({x: 1, y: 3})
        expect(rover.direction).toBe(OrientationEnum.E)
    })
})
