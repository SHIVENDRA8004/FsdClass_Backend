//================================ Counter Dillemma==============================

var result = (function (){
    let x = 0;
    function inner(){
        x++;
        return x;
    }
    return inner;
})();

result();
result();
console.log(result());

// console.log(x);