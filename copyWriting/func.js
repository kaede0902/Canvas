

let n = 0
function render() {
    requestAnimationFrame(render);
    ctx.clearRect(0,0,endX,endY);

    circularMove(midX,midY,midX/3,'9F9',10,15);
    drawArc(midX,midY,50,"ddd");
    drawLine(0,midY,endX,midY,'F99');
} render();





function drawArc(x,y,r,clr) {

    ctx.beginPath();
    ctx.fillStyle = '#'+ clr;
    ctx.arc(x,y,r,0,2*Math.PI,false);
    ctx.fill();
}

function drawLine(x,y,x2,y2,clr) {
    ctx.beginPath();
    ctx.strokeStyle = '#'+ clr;
    ctx.moveTo(x,y);
    ctx.lineTo(x2,y2);
    ctx.stroke();
    ctx.closePath();
}

function circularMove(x,y,r,clr,step,r2) {
    ctx.beginPath();// r2 is moving arc's r.
    ctx.strokeStyle = '#'+ clr;
    ctx.fillStyle = '#'+ clr;
    let angle = Math.PI*2 /n;
    let rx = x + Math.cos(angle)*r;
    let ry = y + Math.sin(angle)*r;
    drawArc(rx,ry,r2);
//    n += step;
    n++;
    console.log(n);
}


