const numbers = [5, 2, 9, 1, 5, 6];

const sortedNumbers = numbers.sort(function(a, b) {
    return b - a;
});

console.log("Sorted Array in Descending Order:", sortedNumbers);
