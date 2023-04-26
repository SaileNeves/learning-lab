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




