const testArray = [0,null, undefined, '', NaN, 1,2,3, 4];

function countTruthy(array) {
    itemCount = 0;
    for (item of array){
        if (item) itemCount++
    }
    return itemCount
}

console.log(countTruthy(testArray))