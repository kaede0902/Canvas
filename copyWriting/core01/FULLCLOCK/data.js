console.log(`midX: ${midX} cos1: ${Math.cos(1)}`);
const clock = {
    x: midX,
    y: midY,
    r: midX/2,
    clr: 'fff',
    numSize: 80,
    cut: endX/25,
    hourCut: endX/10,
    numSpace: 20,
};
const miniClock = {
    x: midX * 1.5,
    y: midY,
    r: midX/8,
    numSize: 19,
};
const leftClock = {
    x: midX/4,
    y: midY * 0.8,
    r: midX/6,
    numSize: 18,
};


let numArr = [1,2,3,4,5,6,7,8,9,10,11,12,];
let romaNum = [
    'I','II','III','IV','V','VI',
    'VII','VIII','XI','X','XI','XII',
];
console.log(romaNum);

const drawNum = (arr,obj) => {
    let angle = 0;
    let numWid = 0;
    let len = arr.length;
    ctx.font = obj.numSize + 'px Arial';

    arr.forEach(num => {
        angle = Math.PI * 2 /len 
            * (arr.indexOf(num)+1 -len/4); 
        numWid = ctx.measureText(num).width;
        let x = obj.x + Math.cos(angle)*obj.r * 0.9
            - numWid/2;
        let y = obj.y + Math.sin(angle)*obj.r * 0.9
            + obj.numSize/3;
        ctx.fillText(num,x,y);
        console.log(`num: ${arr.indexOf(num)+1}\n x: ${x}\n y: ${y}\n angle: ${angle} Math.cos(angle): ${Math.cos(angle)} len: ${len}`);
    })
};
drawNum(numArr,clock);
drawNum(numArr,miniClock);
drawNum(romaNum, leftClock);
