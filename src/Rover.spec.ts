import {Command, Position, Rover} from "./Rover";

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

test('rover accept a list of one command forward', ()=> {
  
  // Given
  const position: Position = {x: 1, y: 1}
  const direction = "N"
  const rover = new Rover(position, direction);

  const command: Command = "f"
  const commands : Command[] = [command]

  // When
  const result = rover.move(commands)
  
  // Then
  expect(result).toBe(true)
  expect(rover.position).toEqual({x: 1, y: 2})
  expect(rover.direction).toBe("N")
})

test('rover accept a list of one command forward to east', ()=> {
  
  // Given
  const position: Position = {x: 1, y: 1}
  const direction = "E"
  const rover = new Rover(position, direction);

  const command: Command = "f"
  const commands : Command[] = [command]

  // When
  const result = rover.move(commands)
  
  // Then
  expect(result).toBe(true)
  expect(rover.position).toEqual({x: 2, y: 1})
  expect(rover.direction).toBe("E")
})
