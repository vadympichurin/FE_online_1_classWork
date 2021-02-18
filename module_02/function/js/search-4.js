// Найти самый маленький элемент в массиве

const numbers = [55, 32, 2, 77, 89, 1, 5, 1, -5, 7];
const smallestNumber = numbers[0];

const findSmallest = function(array, number) {
    for(let i = 1; i < array.length; i += 1) {
        if(array[i] < number) {
            number = array[i];
        }
    }

    return number;
};

const result = findSmallest(numbers, smallestNumber);
console.log('result : ', result);
