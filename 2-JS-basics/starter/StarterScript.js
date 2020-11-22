
/*
let country= prompt('Which Country are you form?');
let continent='Asia';
let population='1.3 billion';
console.log("I'm from " + country + ". It's in " + continent + ". It has a total population of " +population + "!");

alert("I'm from " + country + ". It's in " + continent + ". It has a total population of " +population + "!");
*/

alert(`Welcome to the Gymnastics competetion 2020! 👻 \n           It's Dolphins 🐬 vs Koalas 🐨`);

let dolphinsFirst=Number(prompt('Dolphins score for the first game'));
let dolphinsSecond=Number(prompt('Dolphins score for the second game'));
let dolphinsThird=Number(prompt('Dolphins score for the third game'));

let koalasFirst=Number(prompt('koalas score for the first game'));
let koalasSecond=Number(prompt('koalas score for the second game'));
let koalasThird=Number(prompt('koalas score for the third game'));



function favgDolphins(dolphinsFirst,dolphinsSecond,dolphinsThird){
    console.log((dolphinsFirst+dolphinsSecond+dolphinsThird)/3);
    return (dolphinsFirst+dolphinsSecond+dolphinsThird)/3;
    }

let avgDolphins = favgDolphins(dolphinsFirst,dolphinsSecond,dolphinsThird);

function favgKoalas(koalasFirst,koalasSecond,koalasThird){
    console.log((koalasFirst+koalasSecond+koalasThird)/3);
    return (koalasFirst+koalasSecond+koalasThird)/3;
    }

let avgKoalas= favgKoalas(koalasFirst,koalasSecond,koalasThird);

 if(avgDolphins>avgKoalas){
     console.log(`Dolphins won with an average score of ${avgDolphins} 🏆`);
     if(avgDolphins>2*avgKoalas){
        console.log(`Dolphins Dominated 🔥`);
     }
 }
 else if(avgKoalas>avgDolphins){
    console.log(`Koalas won with an average score of ${avgKoalas} 🏆`);
    if(avgKoalas>2*avgDolphins){
        console.log(`Koalas Dominated 🔥`);
     }
 }
 else if(avgKoalas=avgDolphins){
    console.log(`Who's ready for a tie breaker! 😋`);
 }
 else{
    console.log(`No valid scores are submitted🤐`);
 }

 