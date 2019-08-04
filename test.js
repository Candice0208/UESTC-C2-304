var obj = {};
var num = 1;
var str = '1';
obj[str] = true;
obj[num] = false;
console.log(obj)

for (let i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i)
    }, 1000 * i)
}

for (var j = 0; j < 5; j++) {
    (function (i) {
        setTimeout(function () {
            console.log(i)
        }, 1000 * i)
    })(j)
}