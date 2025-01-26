sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    Hongito_.setPosition(randint(20, 160), randint(20, 160))
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    Psicopato.setPosition(randint(20, 160), randint(20, 160))
    info.changeScoreBy(-1)
})
let Hongito_: Sprite = null
let Psicopato: Sprite = null
music.play(music.stringPlayable("C5 C5 G G G F E D ", 120), music.PlaybackMode.LoopingInBackground)
tiles.setCurrentTilemap(tilemap`nivel2`)
let UnPendejo = sprites.create(img`
    ......ffff..............
    ....fff22fff............
    ...fff2222fff...........
    ..fffeeeeeefff..........
    ..ffe222222eef..........
    ..fe2ffffff2ef..........
    ..ffffeeeeffff......ccc.
    .ffefbf44fbfeff....cddc.
    .ffefbf44fbfeff...cddc..
    .fee4dddddd4eef.ccddc...
    fdfeeddddd4eeffecddc....
    fbffee4444ee4fddccc.....
    fbf4f222222f1edde.......
    fcf.f222222f44ee........
    .ff.f445544f............
    ....ffffffff............
    .....ff..ff.............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
Psicopato = sprites.create(img`
    . . . . . . . . . b 5 b . . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b 7 5 5 5 5 5 b . . . 
    . . . . b b 7 7 7 7 5 d 2 c . . 
    . b b b b 5 5 7 1 f 7 d 2 2 2 b 
    . b d 5 b 5 5 b 7 b 2 2 2 2 b . 
    . . f 5 5 b 5 5 5 2 2 2 2 b . . 
    . . f d 5 5 b 5 5 5 5 5 5 b . . 
    . b c b 5 5 5 d 5 5 5 5 5 5 b . 
    b d c c d 5 5 b 5 5 5 5 5 5 b . 
    c d c d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Enemy)
Hongito_ = sprites.create(img`
    . . . . . . b b b b . . . . . . 
    . . . . b b 3 3 3 3 b b . . . . 
    . . . c b 3 3 3 3 1 1 b c . . . 
    . . c b 3 3 3 3 3 1 1 1 b c . . 
    . c c 1 1 1 3 3 3 3 1 1 3 c c . 
    c c d 1 1 1 3 3 3 3 3 3 3 b c c 
    c b d d 1 3 3 3 3 3 1 1 1 b b c 
    c b b b 3 3 1 1 3 3 1 1 d d b c 
    c b b b b d d 1 1 3 b d d d b c 
    . c b b b b d d b b b b b b c . 
    . . c c b b b b b b b b c c . . 
    . . . . c c c c c c c c . . . . 
    . . . . . . b 1 1 b . . . . . . 
    . . . . . . b 1 1 b b . . . . . 
    . . . . . b b d 1 1 b . . . . . 
    . . . . . b d d 1 1 b . . . . . 
    `, SpriteKind.Food)
UnPendejo.setPosition(96, 74)
Psicopato.setPosition(39, 91)
Hongito_.setPosition(11, 43)
controller.moveSprite(UnPendejo)
scene.cameraFollowSprite(UnPendejo)
Psicopato.follow(UnPendejo)
Psicopato.setVelocity(50, 50)
info.setScore(0)
info.startCountdown(120)
UnPendejo.setVelocity(1000, 1000)
forever(function () {
    Psicopato.follow(UnPendejo, 60)
})
