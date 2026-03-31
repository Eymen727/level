let Y = 0
let X = 0
basic.forever(function () {
    Y = input.acceleration(Dimension.Y)
    X = input.acceleration(Dimension.X)
    if (Math.abs(X) > 32) {
        basic.showIcon(IconNames.No)
    } else if (Math.abs(Y) > 32) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . # . # .
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(100)
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    }
})
