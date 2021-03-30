import {Position, Rover} from "./Rover";

test('Initialise a rover with position',() => {
    // Given
    const position: Position = {x: 1, y: 1}
    const direction = "N"
    // When
    const rover = new Rover(position, direction);
    // Then
    expect(rover.position).toEqual({x: 1, y: 1})
    expect(rover.direction).toBe("N")
})