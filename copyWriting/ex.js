var cvs = document.getElementById('canvas'),
    ctx = cvs.getContext('2d');

ctx.font = '38px Arial'
ctx.fillStyle = 'cornflowerblue';
ctx.strokeStyle = 'bule';

ctx.fillText('Hello Canvas', cvs.width/2 -150,
                             cvs.height/2 +15);

ctx.strokeText('Hello Canvas', cvs.width/2 -150,
                             cvs.height/2 +15)
