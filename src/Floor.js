export default class Floor {
    constructor(graphics) {
        this._graphics = graphics;
        this._polygon = null

        this.topLeftPointX = (window.innerWidth / 2);
        this.topLeftPointY = -50;

        this.topRightPointX = (window.innerWidth / 2);
        this.topRightPointY = -50;

        this.bottomRightPointX = window.innerWidth;
        this.bottomRightPointY = window.innerHeight;

        this.bottomLeftPointX = 0;
        this.bottomLeftPointY = window.innerHeight;  
        
        this.polygonPoints = [
            this.topLeftPointX, this.topLeftPointY,
            this.topRightPointX, this.topRightPointY,
            this.bottomLeftPointX, this.bottomLeftPointY,
            this.bottomRightPointX, this.bottomRightPointY,
        ];

        this._graphics.sortableChildren = true;
        this._polygon = new PIXI.Polygon(this.polygonPoints);
    }

    get graphics() {
        return this._graphics;
    }

    pointsOutOfBounds(x,y){
        return !this._polygon.contains(x + 45, y);
    }

    draw() {
        this._graphics.clear();

        this._graphics
            .beginFill(0x22a6d7, 0.4)
            .drawPolygon(this.polygonPoints);
    }
}