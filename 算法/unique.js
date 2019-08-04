// 数组去重

// 1. indexOf实现
var array = ['1', [1,'2'], '2', true, {a:1}, 1, true, '1', '4', '9', '1',[1,'2'], {a:1}];
var array1 = ['1', [1,'2'], '2', true, {a:1}, 1, true, '1', '4', '9', '1',[1,'2'], {a:1}];
function unique(array) {
    var res = [];
    var newArr = [];
    for (var i = 0, len = array.length; i < len; i++) {
        var cur = array[i];
        var newCur = typeof cur === 'object' ? JSON.stringify(cur):cur;
        if(newArr.indexOf(newCur)===-1){
            newArr.push(newCur);
            res.push(cur);
        }
    }
    return res;
}

// 2. 双层循环实现
function unique1(array) {
    var res = [];
    for (var i = 0, len = array.length; i < len; i++) {
        var cur = array[i];
        var flag = true;
        res.forEach(ele=>{
            if(typeof cur === 'object'){
                if(typeof ele === 'object' && JSON.stringify(cur)===JSON.stringify(ele)){
                    flag = false;
                } 
            } else if(cur === ele){
                flag = false;
            }
        })
        if(flag){
            res.push(cur);
        }
    }
    return res;
}
console.log((typeof []) === 'object')
console.log(unique(array));
console.log(unique1(array));

// 不含对象时，数组去重，ES6实现
var array2 = ['1','2',1,'1','4','4','1'];
function unique2(array) {
    return [...new Set(array)];
}
console.log(unique2(array2));


// Object键值对去重
function unique3(arr){
    var res = [];
    var obj = {};
    for(let i=0,len=arr.length; i<len; i++){
        console.log(typeof arr[i],obj[arr[i]]);
        if(!obj[arr[i]]){
            res.push(arr[i]);
            obj[arr[i]]=true;
        }
        console.log(obj)
    }
    return res;
}
var array3 = ['1','2',1,'1','4','4','1'];
console.log(unique3(array3));
//console.log(JSON.stringify(array))
//console.log(JSON.parse(JSON.stringify(array)))

// Array.prototype.indexOf = function(key) {
//     //参数校验
//     var array = this;
//     for (var i = 0, len = array.length; i < len; i++) {
//         var current = array[i];
//         if (res.indexOf(current) === -1) {
//             res.push(current);
//         }
//     }       
// }

var obj1 = {a:1}
var obj2 = {a:1}
var arr1 = [1,2]
var arr2 = [1,2]

// console.log(obj1.valueOf(),obj2.valueOf(),obj1.valueOf()==obj1.valueOf())
// console.log(JSON.stringify(obj1),JSON.stringify(obj2),JSON.stringify(obj1)==JSON.stringify(obj2))
// console.log(arr1.toString(),arr2.toString(),arr1.toString()==arr2.toString());
// console.log(JSON.stringify(arr1),JSON.stringify(arr2),JSON.stringify(arr1)==JSON.stringify(arr2))
// console.log(JSON.stringify(array),JSON.stringify(array1),JSON.stringify(array)==JSON.stringify(array1))
// { a: 1 } { a: 1 } true
// {"a":1} {"a":1} true
// 1,2 1,2 true
// [1,2] [1,2] true
// ["1",[1,"2"],"2",true,{"a":1},1,true,"1","4","9","1",[1,"2"],{"a":1}] ["1",[1,"2"],"2",true,{"a":1},1,true,"1","4","9","1",[1,"2"],{"a":1}] true