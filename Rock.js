class Rock {
    constructor(x, y, width, height){
        var options = {
            isStatic : false,
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
       // this.image1 = loadImage("sprites/rock.png");
        this.image = loadImage("images/rock.png");
        World.add(myWorld, this.body);
    }
    show(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x, pos.y, this.width, this.height);
    
    }
}