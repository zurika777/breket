/*
function myDisplayer(text) {
    document.getElementById("demo").innerHTML= text;
}


function myCalculator(num1, num2) {
    let sum = num1 + num2;
    return sum;
}
let result = myCalculator(5, 5);
myDisplayer(result);
*/


let data = [-1, 1, 2, -2, 3, -3, 4, -4, 5, -5, 6, -6];
const filterData = (data, filterCallback) => {
return data.filter(filterCallback);
}
    console.log(filterData(data, (x) => x > 0))
    console.log(filterData(data, (x) => x < 0))

