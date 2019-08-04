var x =1;
var bar = function(){
    console.log(this.x);
}

var obj1 = {x:1};
var obj2 = {x:2};
var obj3 = {x:3};
var func = bar.bind(obj1);
func();

func = bar.bind(obj1).bind(obj2);
func();  // 1

func = bar.bind(obj1).bind(obj2).bind(obj3);
func();  // 1

/*
function(){
    obj3
    function(){
        obj2
        function(){
            obj1
        }
    }
}
*/
