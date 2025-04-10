
// //  Exercise 1:
// //  Greetings
// // Create a function called greet that takes a name parameter and prints a greeting message to the console. Call the function with different names.

//  function greet(name) {
// console.log("greeting " +name);  
// }
// greet("rourou")
// greet("ana")
// greet("diyaa")


// // Exercise 2: Sum of Numbers
// // Create a function called sumNumbers that takes an array of numbers as a parameter and returns the sum of those numbers. Call the function with different arrays.


// function sumNumbers(array) {
    
//     console.log(array.reduce((e, t) => e + t, 0));
// }

// sumNumbers([1,2,3,4,5,6])
// sumNumbers([1,7,5,6,9,6])
// sumNumbers([1,6])
// sumNumbers([1,2,36])
  
    
// // Exercise 4: Even or Odd
// // Create a function called isEven that takes a number as a parameter and prints whether the number is even or odd to the console. Use an if-else statement. Call the function with different numbers.

// function isEven(number) {
//     if (number % 2 === 0) {
//       console.log("The number is even.");
//     } else {
//       console.log("The number is odd.");
//     }
//   }
  
//   isEven(4);  
//   isEven(7);  
//   isEven(0);  
//   isEven(15);









// // Exercise 6: Palindrome Check
// // Create a function called isPalindrome that takes a string as a parameter and prints whether the string is a palindrome (reads the same backward as forward) to the console. Ignore spaces and case. Use loops and conditional statements. Call the function with different strings.

// function isPalindrome(string) {
//     let ask = string.split("").reverse().join("")
//  if (ask === string) {
//     console.log("tatktabe mane 2 jwayhe");
//  }else{
//     console.log("la ka3ma tataktabe mane 2 jwayhe");
    
//  }  

 
// }
// isPalindrome("bob")





// // Exercise 7: Maximum of Two Numbers
// // Create a function called maxOfTwo that takes two numbers as parameters and prints the larger of the two to the console. Use an if-else statement. Call the function with different numbers.

// function maxOfTwo(a,b) {
//  a>b ? console.log(a+" hiya lkbira"):console.log(b+" hiya lkbira");
 
  
// }


// maxOfTwo(10, 5);      
// maxOfTwo(3, 7);      
// maxOfTwo(4, 1); 





// // Exercise 8: Array Sum
// // Create a function called arraySum that takes an array of numbers as a parameter and prints the sum of those numbers to the console. Use the for...of loop. Call the function with different arrays.

// function arraySum(numbers) {
//     let sum = 0;
//  for (let index = 0; index < numbers.length; index++) {
//     sum += numbers[index];
 
// }
// console.log("Majmou3 dyal lar9am houwa: " + sum);
    
//   }

//   arraySum([1, 2, 3, 4]);      
//   arraySum([10, 20, 30]);       
              
 


// // Exercise 9: Factorial Without Recursion
// // Create a function called factorial that takes a number as a parameter and prints the factorial of that number to the console. Calculate the factorial without using recursion. Call the function with different numbers.






// function factorial(number) {
//     let result = 1;
  
//     for (let i = 1; i <= number; i++) {
//       result *= i; 
//     }
  
//     console.log("Factorial dyal", number, "howa:", result);
//   }
//   factorial(5); 
//   factorial(3); 



// // Exercise 10: Vowel Checker
// // Create a function called isVowel that takes a character as a parameter and prints whether the character is a vowel or not to the console. Use an if-else statement. Call the function with different characters.

// function isVowel(character) {
//  let arrey =["a", "e", "i", "o", "u"]
//     return arrey.includes(character.toLowerCase())
// }

// console.log(isVowel("e"));
// console.log(isVowel("k"));
 


// // Exercise 11: Largest in Array
// // Create a function called largestInArray that takes an array of numbers as a parameter and prints the largest number in the array to the console. Use the Math.max function. Call the function with different arrays.

// function largestInArray(numbers) {
//     let largest = Math.max(...numbers);  
//     console.log("Akbar ra9m f larray huwa ", largest);
//   }
  


//   largestInArray([3, 1, 5, 7, 2]);      
//   largestInArray([10, 100, 50, 60, 200]); 
    
  


// // Exercise 12: Prime Number Checker
// // Create a function called isPrime that takes a number as a parameter and prints whether the number is a prime number or not to the console. Use loops and conditional statements. Call the function with different numbers.

// function isPrime(number) {

  
//     for (let i = 2; i < number; i++) {
//       if (number % i === 0) {
//         console.log(number + " machi prime");
//         break
//       }
//       console.log(number + " huwa prime"); 
//     }

//   }
  
//   isPrime(7) 
//   isPrime(8) 
 

// // Exercise 13: Sum of Digits
// // Create a function called sumOfDigits that takes a positive integer as a parameter and calculates the sum of its digits. Print the result to the console.




// function sumOfDigits(number) {
//     let sum = 0;
//     let digits = number.toString().split(''); 
//     for (let digit of digits) {
//       sum += parseInt(digit);  
//     }
//     console.log("lmajmou3e dyale lar9ame howa "+ sum);
//   }
  
//   sumOfDigits(123);  
//   sumOfDigits(987);  
//   sumOfDigits(2468);


// // 14
// // Create a function called arrayIntersection that takes two arrays as parameters and returns a new array containing the common elements between them.
// function arrayIntersection(arr1, arr2) {
//     let arrey = [];  
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr2.includes(arr1[i])) { 
//         arrey.push(arr1[i]); 
//       }
//     }
  
//     return arrey; 
//   }
  
//   console.log(arrayIntersection([1, 5, 3, 4], [3, 4, 5, 6])); 
//   console.log(arrayIntersection([7, 8, 9], [10, 8, 7]));     


// //14


// function fibonacci(n) {
//     let fib = [0, 1]; 
  
//     for (let i = 2; i <= n; i++) { 
//       fib.push(fib[i - 1] + fib[i - 2]);  
//     }
//   console.log(fib);
  
//     return fib;  
//   }
  
//   console.table(fibonacci(5));












