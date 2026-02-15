let rand = 0
input.onGesture(Gesture.Shake, function () {
    rand = randint(1, 3)
    if (rand == 1) {
        basic.showIcon(IconNames.Square)
    } else if (rand == 2) {
        basic.showIcon(IconNames.SmallSquare)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
})
basic.forever(function () {
	
})
