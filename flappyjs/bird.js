class Bird{

    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;

        this.gravity = 0.09;
        this.up = 3;
        this.alive = true;
        this.isUp = false;
    }

    update(dt){
        if(this.alive){
           this.y += this.gravity * dt;

            if(this.isUp){
                this.y -= this.up * dt;
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