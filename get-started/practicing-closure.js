function range(start, end) {
    const array = [];
    if (end===undefined){
        return range.bind(null,start);
    }
    for (let index = start; index <= end; index++) {
        console.log(index)
        array.push(index)
    }
    return array;
}

console.log(range(3,6))
console.log(range(3,0))

const test1 = range(3)

console.log(test1(4));