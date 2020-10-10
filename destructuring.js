/*
  Once you complete a problem, refresh ./destructuring.html in your browser and check to see if the problem's test(s) are passing.
  Passed tests will be indicated by a green circle.
  Failed tests will be indicated by a red X.

  You can refresh the page at any time to re-run all the tests.
*/

////////// PROBLEM 1 //////////

// Do not edit the code below.
var carDetails = {
  color: 'red',
  make: 'toyota',
  model: 'tacoma',
  year: 1994
}
// Do not edit the code above.

/*
  Use object destructuring to save the property values from the object carDetails into new variables. 
*/

//Code Here

let color = carDetails.color;
let make = carDetails.make;
let model = carDetails.model;
let year = carDetails.year

////////// PROBLEM 2 //////////

/*
  In the function below named greeting, it is receiving an object as a parameter. 
  Use object destructuring to save the object properties to new variables. 
  The property names are firstName, lastName, and title.
*/

function greeting( obj ) {
  //Code Here
  
  // Do not edit the code below.
  return 'Hello, ' + title + ' ' + firstName + ' ' + lastName + '!';
  // Do not edit the code above.
}



////////// PROBLEM 3 //////////

/*
  Write a function called totalPopulation that will take in an object.
  That object will have 4 properties named utah, california, texas and arizona.
  The property values will be numbers.
  Use object destructuring to save the property values to new variables.
  Sum up the values and return the total number.
*/

//Code Here
let stateObj = {
  utah: 1,
  california: 2,
  texas: 3,
  arizona: 4,
}

function totalPopulation(stateObj){

let utah = stateObj.utah;
let california = stateObj.california;
let texas = stateObj.texas;
let arizona = stateObj.arizona
let states = (utah + california + texas + arizona)
return states
} 

////////// PROBLEM 4 //////////

/*
  Write a function called ingredients that will take in an object. 
  This object will have 3 properties named carb, fat, and protein. 
  The property values will be strings. 
  Use object destructuring to save the property values to new variables. 
  Push these new variables to an array and return the array. 
*/

//Code Here
let obj1 = {
  carb: 'bread',
  fat: 'butter',
  protein: 'eggs'
};
function ingredients(obj1){{
  let carb = obj1.carb;
  let fat = obj1.fat;
  let protein = obj1.protein}
  let result = [carb, fat, protein]
  return result
}

////////// PROBLEM 5 //////////

/*
  Now we will use object destructuring as the function's parameter instead of destructuring the object inside of the function declaration.
  Example:
    function example( {one, two, three} ) {
      return one + two + three
    }

  Write a function called largeNumbers that will take a destructured object as it's parameter.
  The object properties will be named first, second, and third and their values will be numbers.
  Find the smallest number of the three and return that number.
*/

//Code Here
let numberObj = {
  first: 3000,
  second: 5000,
  third: 4500
};
let low = numberObj.first;
let med = numberObj.third;
let high = numberObj.second;

function largeNumbers({low, med, high}){

}

////////// PROBLEM 6 //////////

/*
  Write a function called numberGroups that will take a destructured object as it's parameter.
  The object properties will be named a, b, and c and their values will be arrays of numbers.
  Find the longest array and return that array.
*/

//Code Here
let obj2 = {
  a: [5, 8, 14, 19, 87, 67, 89],
  b: [9, 17, 21, 23, 56, 82],
  c: [10, 14, 29, 15, 3]
}

function numberGroups(){

}

