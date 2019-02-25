

class Obstacle{

    constructor(config){
        this.scene = config.scene;
        this.spriteKey = config.spriteKey;
        this.frameNumber = config.frameNumber;
        this.location = config.location;


        this.addToGame();

    }

    addToGame(){
        this.obstacleSprite = this.scene.physics.add.sprite(0, 0, this.spriteKey, this.frameNumber);
        Align.scaleToGameWidth(this.obstacleSprite, 0.20);
        this.scene.grid.placeAtIndex(this.location, this.obstacleSprite);
        this.obstacleSprite.y -= 100;
    }
}