package _go

import "testing"

func TestDummy(t *testing.T) {
	if (1 == 1) != true {
		t.Error("wtf")
	}
}
