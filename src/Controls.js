export default class Controls {
    constructor(player, floor) {
        this.player = player;
        this.floor = floor;
    }

    moveRight(){
        const isMoveOutOfBounds = this.floor.pointsOutOfBounds(this.player.nextRightMoveX(), this.player.player.y);
        if (!isMoveOutOfBounds) {
            this.player.moveRight();
        }
    }

    moveLeft(){
        const isMoveOutOfBounds = this.floor.pointsOutOfBounds(this.player.nextLeftMoveX(), this.player.player.y);
        if (!isMoveOutOfBounds) {
            this.player.moveLeft();
        }
    }

    listen(){
        var hammertime = new Hammer(window, {});
        hammertime.on('swiperight', ev => {
            this.moveRight()
        });

        hammertime.on('swipeleft', ev => {
            this.moveLeft()
        });

        document.addEventListener('keydown', e => {
            if (e.keyCode === 39 || e.keyCode === 68) {
                this.moveRight()
            }

            if (e.keyCode === 37 || e.keyCode === 65) {
                this.moveLeft();
            }
        })
    }
}