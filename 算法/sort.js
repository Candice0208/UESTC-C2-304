function bubbleSort(data) {
    var data = JSON.parse(JSON.stringify(data));
    var temp = 0;
    for (var i = data.length; i > 0; i--) {
        for (var j = 0; j < i - 1; j++) {
            if (data[j] > data[j + 1]) {
                temp = data[j];
                data[j] = data[j + 1];
                data[j + 1] = temp;
            }
        }
    }
    return data;
}

function quickSort(arr) {
    if (arr.length <= 1)
        return arr;
    var left = [];
    var right = [];
    var pivot = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else if(arr[i] > pivot){
            right.push(arr[i]);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}

function insertSort(data) {
    var len = data.length;
    for (var i = 0; i < len; i++) {
        var key = data[i];
        var j = i - 1;
        while (j >= 0 && data[j] > key) {
            data[j + 1] = data[j];
            j--;
        }
        data[j + 1] = key;
    }
    return data;
}


var arr1 = [8,7,10,9,6]
console.log(bubbleSort(arr1))
var arr2 = [8,7,10,9,6]
console.log(quickSort(arr2))
var arr3 = [8,7,10,9,6];
console.log(insertSort(arr3))
