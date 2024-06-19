const sumAll = function(num1, num2) {
    let sum = 0;
    if (!Number.isInteger(num1) || !Number.isInteger(num2) 
        || num1 <0 || num2 <0) {
            return "ERROR";
    } else {
        if (num1 > num2) {
            [num1, num2] = [num2, num1]
            // let temp = num1;
            // num1 = num2;
            // num2 = temp;
        }
    
        for (i = num1; num1 <= num2; num1++) {
            sum += num1;
        }
        return sum;
    }
};

// sumAll(4, 1);
// console.log(sum);

// Do not edit below this line
module.exports = sumAll;
