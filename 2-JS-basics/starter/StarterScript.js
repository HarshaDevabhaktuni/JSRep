/*
let country= prompt('Which Country are you form?');
let continent='Asia';
let population='1.3 billion';
console.log("I'm from " + country + ". It's in " + continent + ". It has a total population of " +population + "!");

alert("I'm from " + country + ". It's in " + continent + ". It has a total population of " +population + "!");
*/

/*
alert(`Welcome to the Gymnastics competetion 2020! 👻 \n           It's Dolphins 🐬 vs Koalas 🐨`);

let dolphinsFirst=Number(prompt('Dolphins score for the first game'));
let dolphinsSecond=Number(prompt('Dolphins score for the second game'));
let dolphinsThird=Number(prompt('Dolphins score for the third game'));

let koalasFirst=Number(prompt('koalas score for the first game'));
let koalasSecond=Number(prompt('koalas score for the second game'));
let koalasThird=Number(prompt('koalas score for the third game'));



function avgScore(score1,score2,score3){
    console.log((score1+score2+score3)/3);
    return (score1+score2+score3)/3;
    }

let avgDolphins = avgScore(dolphinsFirst,dolphinsSecond,dolphinsThird);

/*
function favgKoalas(koalasFirst,koalasSecond,koalasThird){
    console.log((koalasFirst+koalasSecond+koalasThird)/3);
    return (koalasFirst+koalasSecond+koalasThird)/3;
    }*/

/*
let avgKoalas= avgScore(koalasFirst,koalasSecond,koalasThird);

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

 */

//Object Methods

/*
 let Mark={
     fullName:'Mark Zuckerberg',
    // BMI:'',

    calcMarkBMI: function(){
      let mass= prompt(`Enter the mass of ${this.fullName}`);
       let height=prompt(`Enter the height of ${this.fullName}`);
       this.BMI=(mass/(height*height));
       return (mass/(height*height));
          }
 };

 //console.log(`${Mark.fullName}'s mass is ${Mark.markmass()}`);

 let John={
   fullName:'John cena',
   //BMI:'',

  calcJohnBMI: function(){
     let mass=prompt(`Enter the mass of ${this.fullName}`);
     let height=prompt(`Enter the height of ${this.fullName}`);
     this.BMI=(mass/(height*height));
    return (mass/(height*height));
  }
};

Mark.calcMarkBMI();
John.calcJohnBMI();

if(Mark.BMI>John.BMI){
   console.log(`Mark's BMI (${Mark.BMI}) is greater than John's (${John.BMI})`);
}
else if(Mark.BMI<John.BMI){
   console.log(`Mark's BMI (${Mark.BMI}) is lower than John's (${John.BMI})`);
}
else if(Mark.BMI=John.BMI){
   console.log(`Mark's BMI (${Mark.BMI}) is equal to John's (${John.BMI})`);
}
else{
   console.log(`Sorry, something went wrong! (${Mark.BMI}) (${John.BMI})`);
}
 */

//Loops

/*
let obj={
arr: [17,21,23],

printforecast:function(array){

   for (i = 0; i < array.length; i++) {
      console.log(`${array[i]}'c in ${i+1} days`);
    }
}
}

obj.printforecast(obj.arr);
*/

let obj = {
  arr: [17, 21, 23],

  printforecast: function (array) {
    let str = "";
    for (i = 0; i < array.length; i++) {
      str += `...${array[i]}'c in ${i + 1} days`;
    }
    return str;
  },
};

window.onload = function () {
  document.getElementById("div1").innerText = obj.printforecast(obj.arr);
};

setTimeout(function(){document.getElementById("div2").innerText = obj.printforecast(obj.arr)},5000);

