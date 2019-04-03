

## clock
[clock](
https://kaede0902.github.io/Canvas/copyWriting/core01/FULLCLOCK
)

## PI
Math.PI * 2 => 360
JS starts arc with 90.
We have to starts -1/4.

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

Arr.forEach() でfunc ( elem )を埋め込むと渡したArrのelementsをfuncの引数のelemに代入してループ処理が開始される
難しいけど単純なforより読みやすくスマートにかける。



