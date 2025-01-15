/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const tongueTwister = s1 + " " + s2 + " " + s3 + " " + s4 + " " + s5;
console.log(tongueTwister);

// Print out the concatenated string




/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
console.log(part1[part1.length-1].toUpperCase());
let part3 = part1+part2, result="";
for (let i=0; i<part3.length; i++){  
    if (i === part1.length-1 || i === part1.length+part2.length-1){
        result += part3[i].toUpperCase();
    }else{
        result += part3[i];
    }
}
// Print the cameLtaiL-formatted string
console.log(result);





/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tipAmount = billTotal*.15;

// Print out the tipAmount
console.log(tipAmount);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)
const randomNumber = Math.floor(Math.random()*11);

// Print the generated random number
console.log(randomNumber);


/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
console.log(false,expression1);
const expression2 = a || b;
console.log(true,expression2);
const expression3 = !a && b;
console.log(false,expression3);
const expression4 = !(a && b);
console.log(true,expression4);
const expression5 = !a || !b;
console.log(true,expression5);
const expression6 = !(a || b);
console.log(false,expression6);
const expression7 = a && a;
console.log(true,expression7);