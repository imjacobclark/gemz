
export default class Background {
    constructor() {
        const texture = PIXI.Texture.from('./assets/back.png');
        this._background = new PIXI.Sprite(texture);

        this._background.width = window.innerWidth;
        this._background.height = window.innerHeight;
    }

    get background() {
        return this._background;
    }
}