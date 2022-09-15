// There is an array below, you follow each task.
const arrays = [
  {
    id: 1,
    name: "user 1",
    age: 22,
  },
  {
    id: 2,
    name: "user 2",
    age: 21,
  },
  {
    id: 3,
    name: "user 3",
    age: 23,
  },
  {
    id: 4,
    name: "user 4",
    age: 24,
  },
];

// task 1: Add a new user to the beginning of the array
arrays.unshift({ id: 0, name: "user 0", age: 19 });
console.log(arrays);

// task 2: Add a new user at the end of the array
arrays.push({ id: 5, name: "user 5", age: 29 })
console.log(arrays);

// task 3: add multiple users to the array
addArr1 = [{ id: 6, name: "user 6", age: 18 }];
addArr2 = [{ id: 7, name: "user 7", age: 28 }];
newArray = arrays.concat(addArr1, addArr2);
console.log(newArray);

// task 4: remove 1 user from the array
arrays.splice(0, 1);
console.log(arrays);

// task 5: filter out users with age >= 22;
result = arrays.filter(function (user) {
  if (user.age >= 22) { return user; }
})
console.log(result);

// task 6: Transform the current array into a new array with the new field "class" of type string
arrays.map(function (user) {
  user.class = "itwK";
})
console.log(arrays);

// task 7: Find a user with age = 23
result = arrays.filter(function (users) {
  if (users.age === 23) { return users; }
})
console.log(result);

// task 8: use for loop to get users with age >= 23
function findUser(array) {
  var index, count = 0;
  var newArray = [];
  for (index = 0; index < arrays.length; index++)
    if (arrays[index].age >= 23) {
      newArray[count] = arrays[index];
      count++;
    }
  return newArray;
}
console.log(findUser(arrays));

// task 9: Based on the above information array, and the ids array below, filter out information about users with id as the array below.
function findUserWithId(id) {
  result = arrays.filter(function (users) {
    if (users.id === id) { return users; }
  })
  return result;
}
console.log(findUserWithId(3));

// task 10: sort the users in the above array in ascending age order
/*function sortingAsceding(array) {
  var newArray = [];
  var i, j, temp, length = array.length;
  for (i = 0; i < length - 1; i++) {
    for (j = i + 1; j < length; j++)
      if (array[i].age > array[j].age) {
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
  }
  return array;
}
console.log(sortingAsceding(arrays));*/
result = arrays.sort(function (user1, user2) {
  return (parseFloat(user1.age) - parseFloat(user2.age))
})
console.log(arrays);

// task 11: update the information in the array above with the field "class" converted in task 6 to uppercase (upCase)
result = arrays.map(function (users) {
  return users.class.toUpperCase();
})
console.log(result);

// task 12: get the last element of the above array
var lastElement = arrays.slice(arrays.length - 1);
console.log(lastElement);

// task 13: get the first element of the above array
var firstElement = arrays.slice(0, 1);
console.log(firstElement);

// task 14: for below 2 arrays, merge 2 arrays into one and remove duplicate elements, expected result => ["Chicken", "Duck", "Dog"]
const array1 = ["Chicken", "Duck"];
const array2 = ["duck", "Dog"];
function upper(x) {
  var result = x.toUpperCase();
  return result;
}
function mergeArray(array1, array2) {
  var array = [];
  array = array1.concat(array2);
  var length = array.length;
  var i, j;
  for (i = 0; i < length - 1; i++) {
    for (j = i + 1; j < length; j++) {
      if (upper(array[i]) === upper(array[j])) {
        var index = i;
        return array.splice(0, index + 1).concat(array.splice(index, length - 1));
      }
    }
  }
}
console.log(mergeArray(array1, array2));

// -----------------------------------
const person = {
  firstName: "John",
  lastName: "Doe",
};

// task 15: get its key from the person object above. result => ['firstName', 'lastName']
/*function getItsKey(person) {
  var array;
  array = person.firstName.concat(" ")
  array = array.concat(person.lastName);
  return array.split(" ");
}*/
var result = Object.keys(person);
console.log(result);

// task 16: from the person object above get its value. result => ['John', 'Doe']
var result = Object.values(person);
console.log(result);

// task 17: convert above object to array. expected result => [{firsName: 'John'}, {lastName: 'Doe'}]
var result = Object.entries(person);
console.log(result);

// task 18: from the person object above add an "age" field to the object. expected result => { firstName: "John", lastName: "Doe", age: 100 };
//person = {...person, age: 100};
person.age = 100;
console.log(person);

// task 19: for the array string below, convert this array to object. Expected Result => {0:"a", 1:"b", 2:"c"}
const arrString = ["a", "b", "c"];
var newArrString = Object.assign({}, arrString);
console.log(newArrString);

// task 20: for the boolean array below, check the output of this array is true or false
const arrBoolean = [true, true, false];
result = arrBoolean.every(function (param) {
  return (param === true);
})
console.log(result);

// task 21: write an object using setter & getter to add new value and get value. key word (Getter, setter)
const student1 = {
  gender1: "male",
  gender2: "female",
  gender3: "no",
  get otherGender() {
    return this.gender3;
  }
};
console.log(student1.gender3);
const student2 = {
  gender1: "male",
  gender2: "female",
  gender3: "no",
  set otherGender(param) {
    this.gender3 = param;
  }
};
student2.otherGender = "other";
console.log(student2.gender3);

// task 22:
//const newFunction = (user) => {
// handle this function when passing user's params as user's information
function newFunction(idUser) {
  var arr = [];
  arrays.filter(function (users) {
    if (users.id === idUser) {
      arr = ("Hello " + users.name + " - age: " + users.age);
    }
  })
  return arr;
}
console.log(newFunction(1));
// expected return result is a string => "Hello User - age: 21"

// task 23:
let numb = 1.4; // => round up the number of sides. expected result = 2
var result = Math.ceil(numb);
console.log(result);

// task 24: Concatenate the data string into the variables below. expected results. => 'name: user - age: 21 - class: classAbc'
let name = "user";
let age = 21;
let className = "classAbc";
var arr = [];
arr = ("name: " + name + " - age: " + age + " - class: " + className);
console.log(arr);

// task 25: for the array number below, sum the array: result = 45;
const arrNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9];
sum = arrNumber.reduce(function (sum, num) {
  return sum + num;
})
console.log(sum);