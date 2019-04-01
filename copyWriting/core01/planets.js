let sun = {
    x: midX,
    y: midY,
    r: midX/4,
    clr: 'FFF100',
};
let earth = {
    x: null,
    y: null,
    r: sun.r/10,
    spd: 1,
    dist: sun.r * 2,
    clr: '65AADD',
}
let moon = {
    x: null,
    y: null,
    r: earth.r * 0.27,
    spd: 2,
    dist: midX/12,
    clr: 'B7840C',
};

let merculy = {
    x: null,
    y: null,
    r: earth.r * 0.38,
    spd: 1.7,
    clr: '848081',
    dist: earth.dist * 0.59,
};
let venus = {
    x: null,
    y: null,
    r: earth.r * 0.95,
    spd: 1.25,
    clr: 'A97042',
    dist: earth.dist * 0.72, 
};
let mars = {
    x: null,
    y: null,
    r: earth.r * 0.53,
    spd: 0.86,
    dist: sun.r * 2.2,
    clr: 'E0927B', 
};
let jupiter = {
    x: null,
    y: null,
    r: 11.2,
    spd: 0.42,
};
let saturn = {
    x: null,
    y: null,
};
