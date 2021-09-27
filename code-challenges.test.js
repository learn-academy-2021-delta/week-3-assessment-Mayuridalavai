// ASSESSMENT 3: Coding practical questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.

// Example input: 6
// Expected output: [1, 1, 2, 3, 5, 8]

// Example input: 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

//describe method that lists the name of the function
//test method describes what function does
//an expect method calls the function to test arguments


// describe("fibonacciNum",() => {
//     test('function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence',() => {
//         expect(fibonacciNum(6)).toEqual([1, 1, 2, 3, 5, 8])
//         expect(fibonacciNum(10)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
//     })
// })



// b) Create the function that makes the test pass.

//declare a function named fibonacciNum
//conditionals if and else to check the numbers
//for loop for iterating the numbers
//push() to add value on the end of array

const fibonacciNum = (number) =>{
 if (number <=2){
     return "enter a number larger than 2"
 }else {
     let arr = []
     arr[0] = 0
     arr[1] = 1
for (let i=2; i<=number; i++)
{
    arr.push(arr[arr.length-1] + arr[arr.length-2])
} 
return arr.slice(1)
}
}
console.log(fibonacciNum(6));




// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

//var fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
// Expected output: [-9, 7, 9, 199]

//var fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
// Expected output: [-823, 7, 23]

//describe method that lists the name of the function
//test method describes what function does
//an expect method calls the function to test arguments

describe("oddNums",() => {
    test('function that takes in an array and returns a new array of only odd numbers sorted from least to greatest',() => {
        expect(oddNums([4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"])).toEqual([-9, 7, 9, 199])
        expect(oddNums(["hello", 7, 23, -823, false, 78, null, "67", 6, "number"])).toEqual([-823, 7, 23])
    })
})


// b) Create the function that makes the test pass.

//declare a function named oddNums
//function should take in an array
//conditinals if to check the odd value
//filter returns new array
//sort the array of numbers

 const oddNums = (array) =>{
     return array.filter(value => {

         if(typeof(value) === "number"){
          array.sort((a,b)=>a - b)
          return value % 2 !== 0
          
        }
         })
         
        }
        
         
    
    
 
     

// --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// a) Create a test with expect statements for each of the variables provided.

// var numbersToAdd1 = [2, 4, 45, 9]
// // Excpected output: [2, 6, 51, 60]

// var numbersToAdd2 = [0, 7, -8, 12]
// // Expected output: [0, 7, -1, 11]

// var numbersToAdd3 = []
// // Expected output: []

//describe method that lists the name of the function
//test method describes what function does
//an expect method calls the function to test arguments

describe("accumulatingSum",() => {
    test('function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array',() => {
        expect(accumulatingSum([2, 4, 45, 9])).toEqual([2, 6, 51, 60])
        expect(accumulatingSum([0, 7, -8, 12])).toEqual([0, 7, -1, 11])
        expect(accumulatingSum([])).toEqual([])
   
    })
})



// b) Create the function that makes the test pass.

//declare a fumction named accumulating sum 
//for loop for iteration of an array
//output should be sum [0, 7, -1, 11]
//push() to add value on the end of array

const accumulatingSum = (array)=>{
    
     var result = [array[0]]
     var last = array[0]
     for(i=1;i<array.length;i++){
         last=last + array[i]
         result.push(last)

     }
     return result
 }
