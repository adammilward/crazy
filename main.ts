basic.forever(function () {
    cuteBot.motors(30, 60)
    basic.pause(1000)
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_L, 0, 0, 255)
    cuteBot.singleheadlights(cuteBot.RGBLights.RGB_R, 255, 0, 0)
    basic.pause(1000)
    cuteBot.forward()
    basic.pause(1000)
    cuteBot.backforward()
    basic.pause(1000)
    cuteBot.stopcar()
    basic.pause(2000)
    music.play(music.stringPlayable("C C5 F C D G E B ", 120), music.PlaybackMode.LoopingInBackground)
    basic.pause(1000)
    cuteBot.turnright()
    basic.pause(1000)
    cuteBot.forward()
    basic.pause(1000)
    cuteBot.turnleft()
    basic.pause(100)
    cuteBot.backforward()
    basic.pause(1000)
    cuteBot.stopcar()
})
