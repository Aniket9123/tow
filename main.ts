input.onButtonPressed(Button.A, function () {
    led.unplot(x, 2)
    x += -1
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x, 2)
    x += 1
})
let x = 0
x = 2
led.plot(x, 2)
basic.forever(function () {
    led.plot(x, 2)
    if (x == -1) {
        basic.showString("Player 1 wins")
    }
    if (x == 5) {
        basic.showString("Player 2 wins")
    }
})
