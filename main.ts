serial.redirect(
SerialPin.USB_TX,
SerialPin.USB_RX,
BaudRate.BaudRate115200
)
basic.forever(function () {
    serial.writeLine("Bonjour")
    basic.pause(1000)
    serial.writeLine("ROCKET")
    basic.pause(1000)
})
