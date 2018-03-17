/*
    Declare F = 32;
    Expression ( F - 32 ) / 1.8;
    Declare C = Evaluated expression from [2]
*/

const F = 32;
let C = (F-32)/1.8;

console.log(C)

if (C > 0) {
    console.log("it is not freezing!")
}
else {
    console.log('it may be freezing...')
}

console.log(`

Look ma! 

THis is string interpolation: 
${C}
`)










