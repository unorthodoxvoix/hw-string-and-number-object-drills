//1
//Write a variable and call it dogQuestion and have the value of "But what if I like dogs more than cats?"
//use the .length method to determine the length of the string value. 

//1 Code Answer
let dogQuestion = 'But what if I like dogs more than cats?';

//1 Result Answer
console.log(dogQuestion.length)


//2
//Write a variable and call it noms and have the value of the name any type of snack you like, 
//use the .length method to determine the length of the string value. 
//2 Code Answer
let noms = 'Cookie Butter';

//2 Result Answer
console.log(noms.length);


//3 
//Replace "no" values in the "I have no interest in Boba" in string using the correct method.
//3 Code Answer
let boba = 'I have no interest in Boba';
let bobaResult = boba.replace('no','some');

//3 Result Answer:
console.log(bobaResult);

//4
//Trim this string "Tell me whyyyy!                 ".
//4 Code Answer
let questions = "Tell me whyyyy!                 "

//4 Result Answer
console.log(questions.trim())

//5
// Convert 1400 into a string.
//5 Code Answer:

let myNum = 1400
let myNum2 = myNum.toString()

//5 Result Answer:
console.log(myNum2);



//6
//Convert the boolean true and false into integers
//6 Code Answer:


//6 Result Answer:



//7
// Convert the string "02130" into an integer
//7 Code Answer:

let strConv = '02130';
console.log(strConv);
console.log(typeof strConv);

let strConv2 = Number(strConv);

//7 Result Answer:
console.log(strConv2);
console.log(typeof strConv2);

//8
//Search the string "Fighting Evil by Moonlight" for "Moonlight" content using the correct method.
//8 Code Answer:
let sailorMoon = "Fighting Evil by Moonlight"
let moonlight = sailorMoon.substring(17, 26);

//8 Result Answer:
console.log(sailorMoon.indexOf('Moonlight'));
console.log(moonlight);

//9
//Concatenate the following "I love"+ favorite food + Favorite drink "!"
//9 Code Answer:
let heart = 'I love'
let yummy = ' lasagna'
let wine = ' and cabernet sauvignon!'

//9 Result Answer:

console.log(heart.concat(yummy, wine));

//10
//Write a variable and call it dogQuestion and have the value of "But what if I like dogs more than cats?", 
//use the .length method to determine the length of the string value. 

//SEE ANSWER TO NUMBER 1

//10 Code Answer:


//10 Result Answer:


//11
//Print to the console the smallest number in this list: 85, -3, 5, 93.2, -42.4 (list of numbers must be passed in this order)
//(Hint: Which Math method can you use to do this?) => (math.min)

//11 Code Answer:
console.log(Math.min(85, -3, 5, 93.2, -42.4));

//11 Result Answer:
//-42.4

//12
//Print to the console a random number between 1 to 10.

//12 Code Answer:
let randomNum = Math.floor(Math.random() * 10) + 1;

//12 Result Answer:
console.log(randomNum);

//13
//Print to the console a random number between 14 to 21.

//13 Code Answer:
let randomNum2 = Math.floor(Math.random() * (21-14) + 1) + 14;

//13 Result Answer:

console.log(randomNum2);

//14 Challenge! (Optional)
//Print to the console the current date in the format of "MM/DD/YYYY" using Date object methods you learned 

//14 Code Answer:
let todaysDate = new Date()
let formatDate = todaysDate.toDateString();

//14 Result Answer:
console.log(formatDate);