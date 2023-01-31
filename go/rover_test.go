package _go

import "testing"

var worldMap = WorldMap{height: 5, width: 5, rocks: []Position{{x: 2, y: 3}}}

func TestOneForwardFacingNorth(t *testing.T) {
	// Given
	var position = Position{x: 1, y: 1}
	var expected = Position{x: 1, y: 2}
	var direction = "N"
	var rover = Rover{position, direction, worldMap}

	// When
	var result = rover.move([]string{"f"})

	// Then
	if result.message != "commands done" {
		t.Error("not passed")
	}
	if rover.position != expected {
		t.Error("not passed")
	}
	if rover.orientation != "N" {
		t.Error("not passed")
	}
}
func TestOneBackWardFacingNorth(t *testing.T) {
	// Given
	var position = Position{x: 1, y: 1}
	var expected = Position{x: 1, y: 5}
	var direction = "N"
	var rover = Rover{position, direction, worldMap}

	// When
	var result = rover.move([]string{"b"})

	// Then
	if result.message != "commands done" {
		t.Error("not passed")
	}
	if rover.position != expected {
		t.Error("not passed")
	}
	if rover.orientation != "N" {
		t.Error("not passed")
	}
}
func TestOneForwardFacingSouth(t *testing.T) {
	// Given
	var position = Position{x: 1, y: 1}
	var expected = Position{x: 1, y: 5}
	var direction = "S"
	var rover = Rover{position, direction, worldMap}

	// When
	var result = rover.move([]string{"f"})

	// Then
	if result.message != "commands done" {
		t.Error("not passed")
	}
	if rover.position != expected {
		t.Error("not passed")
	}
	if rover.orientation != "N" {
		t.Error("not passed")
	}
}
func TestOneBackWardFacingSouth(t *testing.T) {
	// Given
	var position = Position{x: 1, y: 1}
	var expected = Position{x: 1, y: 2}
	var direction = "S"
	var rover = Rover{position, direction, worldMap}

	// When
	var result = rover.move([]string{"b"})

	// Then
	if result.message != "commands done" {
		t.Error("not passed")
	}
	if rover.position != expected {
		t.Error("not passed")
	}
	if rover.orientation != "N" {
		t.Error("not passed")
	}
}
func TestOneForwardFacingWest(t *testing.T) {
	// Given
	var position = Position{x: 1, y: 1}
	var expected = Position{x: 5, y: 1}
	var direction = "W"
	var rover = Rover{position, direction, worldMap}

	// When
	var result = rover.move([]string{"f"})

	// Then
	if result.message != "commands done" {
		t.Error("not passed")
	}
	if rover.position != expected {
		t.Error("not passed")
	}
	if rover.orientation != "N" {
		t.Error("not passed")
	}
}
func TestOneBackWardFacingWest(t *testing.T) {
	// Given
	var position = Position{x: 1, y: 1}
	var expected = Position{x: 2, y: 1}
	var direction = "W"
	var rover = Rover{position, direction, worldMap}

	// When
	var result = rover.move([]string{"b"})

	// Then
	if result.message != "commands done" {
		t.Error("not passed")
	}
	if rover.position != expected {
		t.Error("not passed")
	}
	if rover.orientation != "N" {
		t.Error("not passed")
	}
}
func TestOneForwardFacingEast(t *testing.T) {
	// Given
	var position = Position{x: 1, y: 1}
	var expected = Position{x: 2, y: 1}
	var direction = "E"
	var rover = Rover{position, direction, worldMap}

	// When
	var result = rover.move([]string{"f"})

	// Then
	if result.message != "commands done" {
		t.Error("not passed")
	}
	if rover.position != expected {
		t.Error("not passed")
	}
	if rover.orientation != "N" {
		t.Error("not passed")
	}
}
func TestOneBackWardFacingEast(t *testing.T) {
	// Given
	var position = Position{x: 1, y: 1}
	var expected = Position{x: 5, y: 1}
	var direction = "E"
	var rover = Rover{position, direction, worldMap}

	// When
	var result = rover.move([]string{"b"})

	// Then
	if result.message != "commands done" {
		t.Error("not passed")
	}
	if rover.position != expected {
		t.Error("not passed")
	}
	if rover.orientation != "N" {
		t.Error("not passed")
	}
}
func TestTurnLeft(t *testing.T) {
	// Given
	var position = Position{x: 1, y: 1}
	var direction = "N"
	var rover = Rover{position, direction, worldMap}

	// When
	var result = rover.move([]string{"l"})

	// Then
	if result.message != "commands done" {
		t.Error("not passed")
	}
	if rover.position != position {
		t.Error("not passed")
	}
	if rover.orientation != "W" {
		t.Error("not passed")
	}
}
func TestTurnRight(t *testing.T) {
	// Given
	var position = Position{x: 1, y: 1}
	var direction = "N"
	var rover = Rover{position, direction, worldMap}

	// When
	var result = rover.move([]string{"r"})

	// Then
	if result.message != "commands done" {
		t.Error("not passed")
	}
	if rover.position != position {
		t.Error("not passed")
	}
	if rover.orientation != "E" {
		t.Error("not passed")
	}
}
func TestObjectDetection(t *testing.T) {
	// Given
	var position = Position{x: 1, y: 1}
	var expectedRoverPosition = Position{x: 1, y: 3}
	var direction = "N"
	var rover = Rover{position, direction, worldMap}

	// When
	var result = rover.move([]string{"f", "f", "r", "f", "r"})

	// Then
	if result.message != "rocks encountered" {
		t.Error("not passed")
	}
	if rover.position != expectedRoverPosition {
		t.Error("not passed")
	}
	if rover.orientation != "E" {
		t.Error("not passed")
	}
}
