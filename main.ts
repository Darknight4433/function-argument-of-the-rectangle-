function rectangle (L: number, B: number) {
    scene.setBackgroundColor(9)
    game.splash("PERIMETER =" + (B + (L + 2)))
    game.splash("AREA=" + B * L)
}
rectangle(20, 10)
