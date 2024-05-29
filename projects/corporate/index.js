//Data types
//Number 012345
//string "Hello world" "" '' //literal or template string
//Boolean true or false
//array // collection []
//Object //key value pair {}
// undefined //
// null // 
//nan // not a number


//reserve words let class const
//let a = "Hello world";
//let b = "Goodbye";
//let c = " 123";
//let d = true;

//console.log(a);
//console.warn(b);
//console.error(c);
//console.log(d);

//let e = a + b;
//console.log(e);

//let test = 123

//console.log(c + test);

let a =10;
let b =12;
let sum = a + b;
let multiplication = a * b;
let division = a / b;
let modules = a % b;
let subtraction = a - b;

console.log("numbers", a, b);
console.log("sum",sum);
console.log("multiplication",multiplication);
console.log("division",division);
console.log("modules",modules);
console.log("subtraction",subtraction);
console.log("average",(a + b) / 2);
console.log("average",sum / 2);

let location = "kathmandu"

console.log("I live in"+ " " + locations);
console.log(`I live in ${locations}`);

console.log(typeof locations);
console.log(typeof subtraction);
// I live in kathmandu

// 
//+ - * / % > <
//conditional operators
// > < 
let a = 10;
let b = 12;
console.log(a>b ,"greater than"); // false
console.log(a < b ,"less than" ); // true
console.log(a >= b ," greater than equal to" ); // false
console.log(a <= b ," less than equal to" ); // true
console.log(a == b ,"  equals" ); // false
console.log(a === b ," equal value with type" ); // false

let c = 10
let d = "10"

console.log(c == d); //true
console.log(c === d); //false

// assignment operator
c = d; // c="10"
ga
// logical operator
// && || !

//AND or Not
// 2 2 2

// value 1  value 2 result

console.log("******* and gate ******"); 
console.log(true && false); // false
console.log(false && false); // false
console.log(false && true); // false
console.log(true && true); // true

console.log("******* or gate ******"); 
console.log(true || false); // true
console.log(false || false); // false
console.log(false || true); // true
console.log(true || true); // true

console.log("******* not gate ******"); 
console.log(true); // false
console.log(false); // true

// conditional statement

let first = 100
let second = 200

if (first > second){
    console.log("First is greater", first);
}else{
    console.log("second is greater", second);
}

// Write a program to find if given number is even or odd
if(first % 2 == 0) {
    console.log("even");
}else {
    console.log("odd");
}

//  WAP to find if given number is divisible by 5 or not
if(second % 5 == 0) {
    console.log("Divisible by 5");
} else {
    console.log("not Divisible")
}

// WAP to find give number is divisible by 5 and 7
// Data Structure and Algorithm
if(second % 5 == 0 && second % 7 == 0){
    console.log("Divisible by 5 and 7");
} else {
    console.log("Not Divisible by 5 and 7");
}

if (first < second) {
    console.log("second is greater", second);
}

// WAP to find given number is divisible by 9 and 15.
if (second % 9 == 0 && second % 15 == 0) {
    console.log("Divisible by 9 and 15");
  } else {
    console.log("Not Divisible by 9 and 15");
  }
/*------------------------------------------*/
let num1=10
let num2=20
let num3=30
// 1.WAP to find largest number among three different number
if (num1 >= num2 && num1 >= num3) {
    console.log(num1 + " is the largest number.");
  } else if (num2 >= num1 && num2 >= num3) {
    console.log(num2 + " is the largest number.");
  } else {
    console.log(num3 + " is the largest number.");
  }

  // 2.WAP to find smallest number among three different number
  if (num1 <= num2 && num1 <= num3) {
    console.log(num1 + " is the smallest number.");
  } else if (num2 <= num1 && num2 <= num3) {
    console.log(num2 + " is the smallest number.");
  } else {
    console.log(num3 + " is the smallest number.");
  }
//3.WAP to find day of the week . For example: value is 1 console "Sunday"
let day =1;
if(day ==1){
  console.log("sunday");
}else if (day == 2){
  console.log("monday");
} else if (day == 3){
  console.log("tuesday");
} else if (day == 4){
  console.log("wednesday");
} else if (day == 5){
  console.log("thursday");
} else if (day == 6){
  console.log("friday");
} else if (day == 7){
  console.log("saturday");
} else {
  console.log("Invalid week day");
}

  // 4.WAP to calculate average of three numbers

console.log ('Average', (num1 + num2 + num3) / 3);

//5.WAP to calculate the percentage of total marks.
let acquiredMarks = 400;
let totalMarks = 1000;
let percentage = (acquiredMarks / totalMarks) * 100;
console.log(`Acheived Percentage ${percentage}%`);

//6.WAP to find the score of a student. For example if under 50 E, if under 60 D, if under 65 C, if under 75 B, if under 90 A ,if above 90 A+
let score = 1;
if (score < 50) {
  console.log("E");
} else if (score < 60) {
  console.log("D");
} else if (score < 65) {
  console.log("C");
} else if (score < 75) {
  console.log("B");
} else if (score < 90) {
  console.log("A");
} else {
  console.log("A+");
}


//9.WAP to find if given number is positive or negative
if(first >= 0){
  console.log("Positive")
}else {
  console.log("Negative")
}

//10.WAP to find if average of three number is even or odd.
if(average % 2 == 0){
  console.log("even")
}else {
  console.log("odd")
}

//11.WAP to find if given number is positive and even.
if (first >= 0 && first % 2 == 0) {
  console.log("Number is positive and even");
} else {
  console.log("Not even or negative");
}


// ternary operator
let a = 12
if(a % 2 == 0) {
  console.log("even")
}else {
  console.log("odd")
}
// syntax: condition ? true operation : false operation
a % 2 == 0 ? console.log("even"):console.log("odd")

a % 2 == 0 && a > 0 ? console.log("even"):console.log("odd")

a % 2 == 0
? a > 0
?console.log("positive");
:console.log("negative");
:console.log("odd"); 

//switch statement

switch(day){
  case 1:
    console.log('sunday')
    break;
    case 2:
    console.log('monday')
    break;
    case 3:
      console.log('tuesday')
      break;
      case 4:
        console.log('wednesday')
    break;
    case 5:
      console.log('thursday')
  break;
  case 6:
    console.log('friday')
break;
case 7:
  console.log('saturday')
break;
 default:
  console.log('Invalid week day')
}

//Check if a day is weekend day or a working day. Your script will take day as an input.
 let day ="sunday"

 if(day=="sunday" || day=="saturday"){
  console.log("weekend")
 }
 else{
  console.log("workday")
 }

 // Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
// September, October or November, the season is Autumn.
// December, January or February, the season is Winter.
// March, April or May, the season is Spring
// June, July or August, the season is Summer
let month = "january"
switch(month){
  case "september":
  case "november":
  case "october":
  console.log("the season is autumn")
break;
  case "december":
  case "january":
  case "february":
  console.log("the season is winter")
break;
case "march":
  case "april":
  case "may":
  console.log('the season is spring')
break;
default:
  console.log('the season is summer')
}
// Write a code which can give grades to students according to theirs scores:
// 80-100, A //marks >80 && marks <100
// 70-89, B
// 60-69, C
// 50-59, D
// 0-49, F
let mark = 50
if(mark > 80 && mark <=100){
console.log("A")
}else if(mark >=70 && mark <=79){
  console.log("B")
  }else if(mark >=60 && mark <=69){
    console.log("C")
    }else if(mark >= 50 && mark <=59){
      console.log("D")
      }else {
        console.log('F')
      }



//  If user is 18 or older ,

// give feedback:'You are old enough to drive' but if not 18 give another feedback stating to

//  wait for the number of years he needs to turn 18.



let age = 1


if(age>=18){

    console.log('You are old enough to drive')

}else{

    let ageGap = 18 - age

    console.log(`Wait for ${ageGap} to drive`)
}
