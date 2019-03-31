
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

function circularMove(x,y,r, clr,step, rx,ry,rr) {
    ctx.beginPath();// r2 is moving arc's r.
    ctx.strokeStyle = '#'+ clr;
    ctx.fillStyle = '#'+ clr;
    let tempAngle = Math.PI*2 /360 *angle;
    rx = x + Math.cos(tempAngle)*r;
    ry = y + Math.sin(tempAngle)*r;
    drawArc(rx,ry,rr);
} // copied property, so originals No chanage.

const drawCircular = (preBall, ball) => {
    let angle = Math.PI*2 /360 * tick;
    //moon.x = earth.x + Math.cos(dir * s) * moon.r;
    ball.x = preBall.x + Math.cos(angle* ball.spd) * ball.dist;
    ball.y = preBall.y + Math.sin(angle* ball.spd) * ball.dist;
    dot(ball);
}
