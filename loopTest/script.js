
const canvas = document.querySelector("canvas");
const c =canvas.getContext('2d');


const t = Math.floor((Math.random()*5));
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;



   
function Word(x,y,dx,dy,radius,dRadius,r,dr,g,dg,b,db,radians,velocity){
    this.x =x;
    this.y =y;
    this.dx = dx;
    this.dy = dy;
    this.radius = Math.floor((Math.random() * 100) +6);
    this.dRadius =1;
    this.r = Math.floor((Math.random() * 255) +1);
    this.dr= .25;
    this.g = Math.floor((Math.random() * 255) +1);
    this.dg= .25;
    this.b = Math.floor((Math.random()* 255)+1);
    this.db = .25;
    this.radians = 0
    this.velocity = 0.005

    this.draw = function (){
        c.beginPath();
        c.moveTo(4,5);
        c.font = "100px Futura";
        c.strokeText(`financier`,this.x,this.y,)
        c.strokeStyle='rgb(' + this.r +',' + this.g + ',' + this.b + ')';
        c.stroke();
        c.fillStyle = 'rgb(0,0,0)';
    }

    this.update = function(){
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        if(this.r > 255 || this.r<1){
            this.dr= -this.dr;
        }
        if(this.g > 255 || this.g<1){
            this.dg= -this.dg;
        }
        if(this.b > 255 || this.b<1){
            this.db= -this.db;
        }
        if(this.radius>100|| this.radius<1){
            this.dRadius = -this.dRadius; 
        }
        this.radians += this.velocity;
        this.x = x + Math.cos(this.radians)*10*1/Math.sin(this.radians);
        this.y = y + (Math.sin(this.radians)*10*1/Math.cos(this.radians));
        this.r += this.dr;
        this.g += this.dg;
        this.b += this.db;
        this.radius += this.dRadius;
        this.draw();
    }
}  

let wordArray =[];

for (i=0;i<5;i++){
   let radius = Math.floor((Math.random() * 100) +6);
   let dRadius =2;
   let x = Math.random() * (innerWidth - radius * 2) + radius;
   let y = Math.random() * (innerHeight - radius * 2) +  radius;
   let dx = 1
   let dy = 1
   let r = Math.floor((Math.random() * 255) +1);
   let dr= .25;
   let g = Math.floor((Math.random() * 255) +1);
   let dg= .25;
   let b = Math.floor((Math.random()*255)+1);
   let db = .25;
   wordArray.push(new Word(x,y,dx,dy,radius,dRadius,r,dr,g,dg,b,db))
}


function animate(){
        requestAnimationFrame(animate);
        // c.clearRect(0, 0, innerWidth, innerHeight);  
        for(i=0;i<wordArray.length; i++){
            wordArray[i].update();
        } 
    }

   animate();






















