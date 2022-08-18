let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d');
 

// ctx.beginPath();
// ctx.arc(100,60, 50, 0, Math.PI*2, true)
// ctx.stroke()
// ctx.fillStyle = "green";
// ctx.fillRect(100, 100, 150,100);
// ctx.fill()
let x = undefined;
let y = undefined;
let starting = false;
let lineheigth = 10;
canvas.addEventListener('mousedown',(e)=>{
    starting= true;
    x = e.offsetX;
    y = e.offsetY;
})
canvas.addEventListener("mouseup",(e)=>{
starting = false
})
canvas.addEventListener('mousemove',(e)=>{
    if(starting){
    const x2 = e.offsetX;
    const y2 = e.offsetY;
    toirog(x2,y2)
    draw(x,y,x2,y2);
    x = x2;
    y = y2
    }

})
function draw(x1,y1,x2,y2){
    
 ctx.beginPath();
 ctx.moveTo(x1,y1);
 ctx.lineTo(x2,y2);
 ctx.lineWidth = lineheigth;
 ctx.stroke();

}
function toirog(x,y){
 ctx.beginPath()
 ctx.fillStyle = "black";
 ctx.fill();
 ctx.arc(x,y,lineheigth,0,Math.PI*2);
 ctx.stroke();
}