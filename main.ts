controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.x += -3
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    agent.x += 3
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
