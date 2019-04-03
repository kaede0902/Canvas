

## clock
https://kaede0902.github.io/Canvas/copyWriting/core01/FULLCLOCK

### forEach
Do func process to each array[] elems.

Ex.
    var cats = 
        [ 'シャム', 'ペルシャ', 'ベンガル', 'ロシアンブルー' ];

    cats.forEach(function( cat ) {
        console.log( cat );
    });
    // 'Sham', 'Persha'...

    var runners = [ '太郎', '次郎', '三郎', '四郎' ];
        runners.forEach(function( runner, index ) {
          console.log( (index + 1) + "位は、" + runner + "です。" );
    }); 
    // 2nd arg is number. i.
