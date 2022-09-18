// task 1: Given a string, Write a function to reverse each word in the sentence
function reverse(string) {
    return string.split("").reverse().join("");
}

function reverseSentence(string) {
    var newArr = [];
    var result = "";
    var index;
    var newString = string.split(" ");
    for (index = 0; index < newString.length; index++) {
        newArr[index] = reverse(newString[index]);
    }
    for (index = 0; index < newString.length; index++)
        result = result.concat(" ", newArr[index]);
    return result;
}

var sentence = "Off Jumpol Adulkittiporn";
console.log(reverseSentence(sentence));

// task 2: Write a recursive function to reverse the string.
function reverseString(string) {
    if (string === "") {
        return "";
    } else {
        return reverseString(string.substr(1)) + string.charAt(0);
    }
}
var string = "Off";
console.log(reverseString(string));

// task 3: Given an array, Write a function to reverse the items in that array.
var array = [1, 9, -3, 21];
function reverseArray(array) {
    return array.reverse();
}
console.log(reverseArray(array));
// task 4: write a recursive function that reverses an array
function reverseArr(array, start, end) {
    var temporary;
    if (start <= end) {
        temporary = array[start];
        array[start] = array[end];
        array[end] = temporary;
    } else {
        return reverseArr(array, start + 1, end - 1);
    }
}
console.log(reverseArray(array, 0, 1));

// task 5: write a recursive sum function
function sum(array, n) {
    if (n === 0) { return 0 };
    return array[n - 1] + sum(array, n - 1);
}
console.log(sum(array, array.length));

// task 6: Write a recursive function to know if a number is prime
function checkPrime(number, i) {
    if (i === number) { return true; }
    else
        if (number % i === 0) { return false; }
        else { return checkPrime(number, i + 1); }
}
var number = 9;
console.log(checkPrime(number, 2));

// task 7: Write a class that includes 4 methods: add, update, remove, compare
const arrays = [
    {
        id: 1,
        name: "Jumpol",
        age: 31,
    },
    {
        id: 2,
        name: "Atthaphan",
        age: 29,
    },
    {
        id: 3,
        name: "Tawan",
        age: 31,
    },
    {
        id: 4,
        name: "Thitipom",
        age: 29,
    },
];
arrays.push({ id: 5, name: "Weerayut", age: 30 });
console.log(arrays);
result = arrays.map(function (user) {
    return user.name.toUpperCase();
})
console.log(result);
arrays.splice(2, 1);
console.log(arrays);
var 
result = arrays.reduce(function (user) {
    if (user.age === 31) return user;
})
console.log(result);