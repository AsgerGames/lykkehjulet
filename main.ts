let hastighed = 0
input.onButtonPressed(Button.A, function () {
    hastighed = 100
    Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, hastighed)
})
input.onButtonPressed(Button.B, function () {
    while (hastighed > 0) {
        hastighed += -30
        Kitronik_Robotics_Board.motorOn(Kitronik_Robotics_Board.Motors.Motor1, Kitronik_Robotics_Board.MotorDirection.Forward, hastighed)
        basic.pause(randint(1500, 3000))
    }
})
