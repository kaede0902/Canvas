let cvs,ctx,endX,endY,midX,midY;

cvs = document.querySelector('canvas');
ctx = cvs.getContext('2d');

endX = cvs.width = window.innerWidth;
endY = cvs.height = window.innerHeight;
midX = endX/2;
midY = endY/2;

ctx.lineWidth = 3;
ctx.strokeStyle = ctx.fillStyle = '#FFF';


