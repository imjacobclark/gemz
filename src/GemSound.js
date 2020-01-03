export default class GemSound{
    constructor(){
        this.playing = false;
    }

    play(){
        if(!this.playing){
            this.playing = true;
        
            PIXI.sound.Sound.from({
                url: 'assets/gem.mp3' 
            }).play()

            this.playing = false
        }
    }
}