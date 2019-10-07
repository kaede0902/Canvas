
let tick = 0;
let ctrl = {
    x: midX,
    y: endY * 0.67,
}

const render = () => {
    tick++; // This val only increase
    ctx.clearRect(0,0,endX,endY);

//    dot();
    ctx.moveTo(endX/3, midY);
    ctx.lineTo(endX/3 * 2, midY);

    ctx.quadraticCurveTo(ctrl.x, ctrl.y, endX/3, midY);
    ctx.stroke();
    
    requestAnimationFrame(render);
}
render();
