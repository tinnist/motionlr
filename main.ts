controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.y += -3
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.setPosition(78, 59)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.x += -3
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.x += 3
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.y += 3
})
let agent: Sprite = null
agent = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 7 7 . . . . 7 7 7 . . 
    . . . . 7 . . 7 7 . 7 7 . 7 . . 
    . . . . 7 . . 7 7 7 . . . 7 . . 
    . . . . 7 . . . . 7 7 . . 7 . . 
    . . . . . 7 . . . 7 7 . 7 . . . 
    . . . . . . 7 7 7 7 7 7 . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
