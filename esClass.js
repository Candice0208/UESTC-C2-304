class Event{
    on(){
console.log(1);
    }
    off(){}
}

var e = new Event();
e.on(); 


class  eventww extends Event{}

console.log(eventww);


var b = new eventww();
b.on();