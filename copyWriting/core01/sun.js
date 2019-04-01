
let tick = 0;

const render = () => {
    tick++; // This val only increase
    ctx.clearRect(0,0,endX,endY);

    ctx.shadowblur = 10000;
    ctx.shadowColor = '#FFF';
    ctx.beginPath();
    ctx.fillStyle = 'yellow';
    ctx.arc(sun.x, sun.y, sun.r, 0,2*Math.PI,false);
    ctx.fill();
    //dot(sun);
    satelite(sun,earth);
    satelite(earth,moon);
    satelite(sun,mars);

    requestAnimationFrame(render);
}
render();
