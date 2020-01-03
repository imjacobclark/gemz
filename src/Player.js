const MOVEMENT_INCREMENT = 30;

export default class Player {
    constructor(x, y, width, height) {
        const texture = PIXI.Texture.from('../assets/player.png');
        this._player = new PIXI.Sprite(texture);

        this._player.width = width;
        this._player.height = height;
        this._player.x = x;
        this._player.y = y;
        this._player.zIndex = 1
    }

    containsPoint(point){
        return this._player.containsPoint(point)
    }

    nextRightMoveX() {
        return this._player.x + MOVEMENT_INCREMENT;
    }

    nextLeftMoveX(){
        return this._player.x - MOVEMENT_INCREMENT
    }

    moveRight(){
        this._player.x = this.nextRightMoveX();
    }

    moveLeft() {
        this._player.x = this.nextLeftMoveX();
    }

    get player(){
        return this._player;
    }

    get movementIncrement(){
        return MOVEMENT_INCREMENT;
    }
}