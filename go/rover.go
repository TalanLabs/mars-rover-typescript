package _go

type Position struct {
	x int
	y int
}

const (
	N string = "N"
	E        = "E"
	S        = "S"
	W        = "W"
)

type WorldMap struct {
	height int
	width  int
	rocks  []Position
}
type RoverResult struct {
	message  string
	position Position
}

type Rover struct {
	position    Position
	orientation string
	worldMap    WorldMap
}

func (rover Rover) move(commands []string) RoverResult {
	return RoverResult{message: "commands done", position: rover.position}
}
