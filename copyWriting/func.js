
function drawArc(x,y,r,clr) {
    ctx.beginPath();
    ctx.fillStyle = '#'+ clr;
    ctx.arc(x,y,r,0,2*Math.PI,false);
    ctx.fill();
}
const dot = p => {
    ctx.beginPath();
    ctx.fillStyle = '#'+ p.clr;
    ctx.arc(p.x, p.y, p.r,0,2*Math.PI,false);
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

const satelite = (preBall, ball) => {
    let angle = Math.PI*2 /360 * tick;
    ball.x = preBall.x + Math.cos(angle* ball.spd) * ball.dist;
    ball.y = preBall.y + Math.sin(angle* ball.spd) * ball.dist;
    dot(ball);
}
