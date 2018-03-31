// Declare F = 32;
// Expression ( F - 32 ) / 1.8;
// Declare C = Evaluated expression from [2]


const F = 32;
const C = (F - 32) / 1.8;

console.log(`${F} in F converts to ${C} in C`)


const F1 = 212;
const C1 = (F1 - 32) / 1.8;

console.log(`${F1} in F converts to ${C1} in C`)

function fToC(valueInFar) {
	const C = (valueInFar - 32) / 1.8;
	return C;	
}

// ALTERNATE WAYS TO WRITE FUNCTIONS
// const fToC = (valueInFar) => {
// 	const C = (valueInFar - 32) / 1.8;
// 	return C;
// }

// const fToC = valueInFar => (valueInFar - 32) / 1.8;

console.log(1+1)
console.log(fToC(32))
console.log(fToC(212))