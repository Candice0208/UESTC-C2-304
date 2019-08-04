var a = null instanceof Object
console.log(a);
console.log(1===true)

var [N,M] = '3 3'.split(' ');

var works = [];

class Work{
    constructor(key,value){
        this.key = key;
        this.value = value;
    }
}

var inp = ['1 100','10 1000','1000000000 1001'];

for(let i=0; i<N; i++) {
    var [key,value] = inp[i].split(' ');
    var tmp = new Work(parseInt(key),value);
    works.push(tmp);
}

works.map(function(a,b){
    return a.key - b.key;
})

var people = '9 10 1000000000'.split(' ');
people.forEach(function(item){
    binary_search(works,parseInt(item));
})

function binary_search(arr, key) {
    var low = 0,
        high = arr.length - 1;
 
    while(low <= high) {
        var mid = parseInt((high + low) /2);
        if(key == arr[mid].key) {
            console.log(arr[mid].value);
            return;
        } else if(key > arr[mid].key) {
            low = mid + 1;
        } else {
            high = mid -1;
        }
    }
	console.log(arr[high].value);
}
