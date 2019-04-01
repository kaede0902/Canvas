
let tick = 0;

const render = () => {
    tick++; // This val only increase
    ctx.clearRect(0,0,endX,endY);

    dot(sun);
    satelite(sun,earth);
    satelite(earth,moon);

    requestAnimationFrame(render);
    console.log(moon.x);
}
render();
