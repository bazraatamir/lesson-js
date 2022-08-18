let canvas = document.getElementById('canvas');
canvas.width = innerWidth;
canvas.height = innerHeight;
let ctx = canvas.getContext('2d');
let x
let y 
let paddleWidth,paddleHeight;
let paddle1X,paddle1Y;
let paddle2X, paddle2Y;
let vx ;
let vy ;
let ballRadius = 10;
let ball = [2,-2]
let Score1 = 0, Score2 = 0;
addEventListener('keydown',move)
function move(e){
    switch(e.key){
        case "w":
            paddle1Y-=10
        break;
        case "s":
            paddle1Y+=10
        break
        case "ArrowUp":
            paddle2Y-=10;
        break;
        case "ArrowDown":
            paddle2Y+=10;
        break
    }
}
function init(){
    x= canvas.width/2
    y = canvas.height/2;
    vx = ball[Math.floor(Math.random()*ball.length)]
    vy=ball[Math.floor(Math.random()*ball.length)]
    ballRadius = 10;
    paddle1X =10;
    paddleWidth =20;
    paddleHeight = 100;
    paddle1Y = canvas.height/2 -paddleHeight/2;
    paddle2X = canvas.width-10-paddleWidth;
    paddle2Y = canvas.height/2 - paddleHeight/2

}
init()
setInterval(()=>{
    ctx.beginPath();
    ctx.fillStyle = "white"
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle="black";
    ctx.font = "50px roboto"
    ctx.fillText(Score1,300,100)
    ctx.fillText(Score2,canvas.width-300,100)
    ctx.fillRect(paddle1X,paddle1Y,paddleWidth,paddleHeight)
    ctx.fillRect(paddle2X,paddle2Y,paddleWidth,paddleHeight);
    ctx.strokeStyle ="red"
    ctx.arc(x ,y ,ballRadius,0,Math.PI*2, true)// x,y,radius,0 toirog
    ctx.stroke()
    ctx.fill()
    ctx.closePath()
    if(x+ballRadius >= canvas.width){
       Score1++;
       init()
    }
    if(x-ballRadius<=0){
       Score2++;
       init()
    }
    if(y+ballRadius >= canvas.height){
        vy = -1
    }
    if(y-ballRadius <= 0){
        vy = 1
    }
    if(x-ballRadius < paddle1X+paddleWidth && y< paddle1Y+paddleHeight && y>paddle1Y){
        vx = -vx
    }
    if(x+ballRadius > paddle2X && y< paddle2Y+paddleHeight && y>paddle2Y){
        vx = -vx
    }

    
  x+=vx
  y += vy
    
},1)
