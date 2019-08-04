function MyObject(val){
    // 私有变量及方法
    var privateVar = val;
    function modifiedVar(val){
        privateVar = val;
    }
    this.getVar = ()=>privateVar;
    this.modVar = (val)=>modifiedVar(val);
}

var obj = new MyObject(10);
console.log(obj.getVar());
obj.modVar(12);
console.log(obj.getVar());

var obj1 = new MyObject(14);
console.log(obj1.getVar());   // 14
console.log(obj.getVar());    // 12

(function(){
    var privateVar = 0;
    function modifiedVar(val){
        privateVar = val;
    }

    MyObject = function(val){
        privateVar = val;
    }

    MyObject.prototype.getVar = ()=>privateVar;
    MyObject.prototype.modVar = (val)=>modifiedVar(val)
})()

var obj = new MyObject(10);
console.log(obj.getVar());   //10

var obj1 = new MyObject(14);
console.log(obj1.getVar());  //14
console.log(obj.getVar());   //14