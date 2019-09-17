class Bird{

    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.gravity = 0.02 ;
        this.upForce = 0.6;
        this.yVel = 0;
        this.alive = true;
        this.isUp = false;
    }

    update(dt){
        if(this.alive){
            const MAX_VEL = 5;

            if(this.yVel < -MAX_VEL)
                this.yVel = -MAX_VEL;
            if(this.yVel > MAX_VEL)
                this.yVel = MAX_VEL;

            this.yVel += this.gravity * dt;
            this.y += this.yVel;

            if(this.isUp){
                this.yVel -= this.upForce * dt;
                this.isUp = false;
            }

        }
    }

    draw(context){
        context.fillStyle = 'yellow';
        context.drawImage(imgs.bird, this.x, this.y, this.w, this.h);
    }

    outOfBounce(ground){
        if(this.y < 0){
            this.alive = false;
        }
        if(this.y+this.h > ground){
            this.alive = false;
        }
    }

}
