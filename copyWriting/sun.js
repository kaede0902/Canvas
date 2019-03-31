
let tick = 0;

let sun = {
    x: midX,
    y: midY,
    r: 50,
    clr: 'FFF100',
};
let earth = {
    center : {
        x: sun.x,
        y: sun.y,
    },
    x: null,
    y: null,
    r: 28,
    spd: 1,
    dist: midX/3,
    clr: '65AADD',
}
let moon = {
    center : {
        x: earth.x,
        y: earth.y,
    },
    x: null,
    y: null,
    r: 10,
    spd: 2,
    dist: midX/6,
    clr: 'B7840C',
};
const render = () => {
    tick++; // This val only increase
    ctx.clearRect(0,0,endX,endY);

    dot(sun);
    drawCircular(sun,earth);
    drawCircular(earth,moon);

    requestAnimationFrame(render);
    console.log(moon.x);
}
render();
