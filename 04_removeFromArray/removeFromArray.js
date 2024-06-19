const removeFromArray = function(array, ...input) {
    let newArray = []

    for (const num of array) {
        if (!input.includes(num)) {
            newArray.push(num)
        }
    }
    return newArray;
};

// removeFromArray([1, 2, 3, 4], 3)

// console.log(removeFromArray([1, 2, 3, 4], 3))

// Do not edit below this line
module.exports = removeFromArray;