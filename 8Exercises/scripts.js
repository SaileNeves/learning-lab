let challenge = '30 days of JavaScript';
console.log(challenge);
console.log(challenge.length);
challenge = challenge.toUpperCase();
console.log(challenge);
challenge = challenge.toLowerCase();
console.log(challenge);
challenge = challenge.substring(1);
console.log(challenge);
challenge ='30 days of JavaScript';
challenge = challenge.substring(0, 2);
console.log(challenge);
console.log(challenge.includes('Script'));
challenge ='30 -- days of JavaScript';
let substrings = challenge.split(" -- ");
console.log(substrings);
challenge = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let resultArray = challenge.split(",");
console.log(resultArray);
console.log(challenge);
challenge ='30 days of JavaScript';
let resultString = challenge.replace("JavaScript", "Python");
console.log(resultString);
challenge ='30 days of JavaScript';
let charAtIndex15 = challenge.charAt(15);
console.log(charAtIndex15);
let charCodeOfJ = challenge.charCodeAt(11);
console.log(charCodeOfJ);
let indexOfA = challenge.indexOf("a");
console.log(indexOfA);
let lastIndexOfA = challenge.lastIndexOf("a");
console.log(lastIndexOfA);
challenge = 'You cannot end a sentence with because because because is a conjunction'
let indexOfBecause = challenge.indexOf("because");
console.log(indexOfBecause);
let lastIndexOfBecause = challenge.lastIndexOf("because");
console.log(lastIndexOfBecause);
let because = /because/
let firstBecause = challenge.search(because);
console.log(firstBecause);
challenge = '      30 Days Of JavaScript       ';
let trimmedInput = challenge.trim();
console.log(trimmedInput);
challenge = '30 Days Of JavaScript';
let startResult = challenge.startsWith('30');
console.log(startResult);
let endResult = challenge.endsWith('JavaScript');
console.log(endResult);
let regexA = /a/g;
let matchResult = challenge.match(regexA);
console.log(matchResult);
let chal = '30 days of ';
let lenge = 'JavaScript';
challenge = chal.concat(lenge);
console.log(challenge);
let repeat = challenge.repeat(2);
console.log(repeat);

//part 2

console.log(`The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`);
let a = '10';
let b = 10;
b = b.toString();
let equal = typeof a == typeof b;
console.log(equal);


let SN = 10;
let PF = parseFloat("9.8");
let pfEqual = SN == PF;
PF = parseFloat("10");


let string1 = 'python';
let string2 = 'jargon';
let on = /on/;
let search1 = string1.match(on);
let search2 = string2.match(on);
console.log(search1,search2);

let sentence = 'I hope this course is not full of jargon.';
let jargon = /jargon/;
searchSentence = sentence.match(jargon);
console.log(searchSentence);

