class Pipe{

    constructor(pos, speed){

        this.topX = pos.w;
        this.botX = pos.w;
        this.topY = 0;

        this.w = 50;
        this.spacing = 100;
        this.speed = speed + 0.05;

        this.pos = pos;
        this.topH = Math.floor(Math.random() * (this.pos.h - this.spacing * 3))
            + this.spacing;
        this.botY = this.topH + this.spacing;
        this.botH = pos.h - this.botY;

        this.passed = false;
    }

    update(dt){
        this.topX -= this.speed * dt;
        this.botX -= this.speed * dt;
    }

    draw(context){
        context.fillStyle = 'green';
        context.fillRect(this.topX, this.topY, this.w, this.topH);
        context.fillRect(this.botX, this.botY, this.w, this.botH);
    }

}
