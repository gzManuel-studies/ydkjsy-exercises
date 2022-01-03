function range(start, end) {
    if (end === undefined) {
        return function getEnd(end) {
            return getRange(start, end);
        }
    } else {
        return getRange(start, end);
    }

    function getRange(start, end) {
        var arr = [];
        for (let index = start; index <= end; index++) {
            arr.push(index);
        }
        return arr;
    }
}

console.log(range(3, 3));  // [3]
range(3, 8); // [3,4,5,6,7,8]

console.log(range(3, 0)) // []
var start3 = range(3);
var start4 = range(4);
console.log(start3(3));  // [3]
console.log(start3(8)); // [3,4,5,6,7,8]
console.log(start3(0)); // []
start4(6); // [4,5,6]