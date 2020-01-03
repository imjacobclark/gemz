export default class BushSound {
    constructor() {
        this.playing = false;
    }

    play() {
        if (!this.playing) {
            this.playing = true;

            PIXI.sound.Sound.from({
                url: 'assets/bush.mp3'
            }).play()

            this.playing = false
        }
    }
}