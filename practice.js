//variables
let bsId = "BS1783";
console.log(bsId);

let myName = "Khaled"
console.log(myName);
myName="Khaled Hasan"
console.log(myName);

const companyName = "Brain Station 23";
console.log(companyName);

let age = 24;
console.log(age);

let isTrainee = true;
console.log(isTrainee);


const myInformation ={
    bsId : "BS1783",
    myName : "Khaled Hasan",
    companyName : "Brain Station 23",
    age : 24,
    isTrainee : true
};

console.log(myInformation);
console.log(myInformation.bsId);
console.log(myInformation.myName);
console.log(myInformation.companyName);
console.log(myInformation.age);
console.log(myInformation.isTrainee);
console.log(typeof myName);
console.log(typeof companyName);
console.log(typeof age);
console.log(typeof isTrainee);
console.log(typeof myInformation);


// Operators
//Aerthmetic Operators
let a = 6;
let b = 5;
//++a;//7
//--b;//4
a++;//6
b++;5

console.log("a=",a);//6
console.log("b=",b);//7
console.log("a+b=",a+b);//13
console.log("a-b=",a-b);//1
console.log("a*b=",a*b);//42
console.log("a/b=",a/b);//1.16667
console.log("a%b=",a%b);//1
console.log("a**b=",a**b);//1


//Assignment Operators
let c = 3;
let d = 4;

sumC = c+=2;//5
c *=2;//6
console.log("c=",sumC);//5
console.log("c=",c);//10

//Comparison Operators and Conditional Statements

if (c===d) {
    console.log(true);
}
else {
    console.log(false);
}

//Practice
//Q1 Get user to input a number using prompt("Enter a number").Check if the number is a multiple of 5 or not.

// let num = prompt('Enter a number');
// if(num % 5 === 0)  {

//     console.log(num ,"is a multiple of 5");
// }

// else {
//     console.log(num ,"is not a multiple of 5");
// }


//Q2--Write a code which can give grades to students according to their scores:
//80-100,A
//70-89,B
//60-69,C
//50-59,D
//0-49,F


// let score = Number(prompt("Enter student's score:"));
// let Grade;

// if (score >= 80 && score <= 100) {
//     Grade = "A";
// } else if (score >= 70 && score <= 79) {
//     Grade = "B";
// } else if (score >= 60 && score <= 69) {
//     Grade = "C";
// } else if (score >= 50 && score <= 59) {
//     Grade = "D";
// } else if (score >= 0 && score < 50) {
//     Grade = "F";
// } else {
//      Grade = "Invalid score";  
//  }

// console.log("Student's Grade is:", Grade);



//Loops practice
//Q1 Print all even numbers from 0 to 100
//let count=0;
let num;
for(let num =0; num<=100;num++){
    if(num % 2 ===0 ){
    console.log(num, "is even");    }
}



//Q1 using while loop
let j=0;
while (j<=100){
    if(j % 2 ===0 ){
        console.log(j, "is even");
    
      }
      j++
}


//Q2--Create a game where you start with any random game number.Ask the user to keep guessing the game number untill the user enter the corret value.

//let n =17;

// let guessNumber=prompt("Guess the number");
// console.log(guessNumber);
// while(n != guessNumber ) {
//     guessNumber=prompt(" Sorry!Guess the number again");

// }

// console.log("Congrasulations! You have gueseed the correct number");

//String Practice
//Q1 Prompt the user to enter their full name.Generate a username for them based on the input.Start username with @,followed by their full name and ending with the full name length

// let fullName= prompt("Enter your Full Name:")
// let userName= "@" + fullName + fullName.length;
// console.log(userName);



//Array Practice 

//Q1 For a given array with marks of students ->[85,97,44,37,76,60].Find
//the average marks of the entire class.


let mark=[85,97,44,37,76,60];
let sum =0;

for(let i =0;i<mark.length;i++){
sum +=mark[i];

}

let avg = sum/mark.length;

console.log(avg);


//Q2 For a given array with prices of 5 items -> [250,645,300,900,50].ALL items have an offer of 10% OFF on them .Change the array to store final price after applying offer.


let items = [250,645,300,900,50];

for (let i=0;i<items.length;i++){

    let offer = items[i]/10;
    items[i]-=offer;
}

console.log(items);

// Q3 Create an array to store companies -> “Bloomberg”, “Microsoft”,“Uber”,“Google”,“IBM”,“Netflix”

// a. Remove the first company from the array

// b. Remove Uber & Add Ola in its place

// c. Add Amazon at the end 

let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
console.log(companies);

companies.shift();
console.log(companies);

companies.push("Amazon");
console.log(companies);

//Functions & Methods
// Q1Create a function using the “function” keyword that takes a String as an argument &
// returns the number of vowels in the string.

function countVowels(str)
{   let count =0;
    for(let i =0;i<str.length;i++){
        if(str[i]==="a"|| str[i]==="e"|| str[i]==="i" || str[i]==="o" || str[i]==="u"){
            count++;
        }
    }
console.log(count);
}

countVowels("abc");
countVowels("khaled");
// Q2 Create same task with arrow function

let countVowel=(str)=>
{   let count =0;
    for(let i =0;i<str.length;i++){
        if(str[i]==="a"|| str[i]==="e"|| str[i]==="i" || str[i]==="o" || str[i]==="u"){
            count++;
        }
    }
console.log(count);
}

countVowel("abc");
countVowel("khaled");

//For a given array of numbers, print the square of each value using the forEach loop.


let array=[1,2,3,4];


array.forEach((val)=>{
    console.log(val**2);
})

//use filter
let newArray = array.filter ((val)=>{
   return val%2===0;
})

console.log(newArray);


