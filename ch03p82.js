var p = Promise.resolve( 21 );
var p2 = p.then( function(v){
    console.log( v ); // 21
    return v * 2;     // выполнение `p2` со значением `42`
} );
p2.then( function(v){ // сцепление `p2`
    console.log( v ); // 42
} );








