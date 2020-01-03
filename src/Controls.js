export default class Controls {
    constructor(player, floor) {
        this.player = player;
        this.floor = floor;
    }

    listen(){
        document.addEventListener('keydown', e => {
            if (e.keyCode === 39 || e.keyCode === 68) {
                const isMoveOutOfBounds = this.floor.pointsOutOfBounds(this.player.nextRightMoveX(), this.player.player.y);
                if (!isMoveOutOfBounds) {
                    this.player.moveRight();
                }
            }

            if (e.keyCode === 37 || e.keyCode === 65) {
                const isMoveOutOfBounds = this.floor.pointsOutOfBounds(this.player.nextLeftMoveX(), this.player.player.y);
                if (!isMoveOutOfBounds) {
                    this.player.moveLeft();
                }
            }
        })
    }
}