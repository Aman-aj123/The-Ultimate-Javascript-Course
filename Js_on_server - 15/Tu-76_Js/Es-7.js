// Here we are using 'export' keyword to export all the functions which we want to use inside another file
export const animal = (animalName) => {
     console.log(`You are ${animalName} Animal...`)
}

export const person = (personName) => {
     console.log(`Your name is ${personName}...`)
}

export const product = (productName) => {
     console.log(`Your product is ${productName}..`);
}


//-------> If we export any function with 'export default' keyword then we can use it withe it's name only and we have to seperate only with ','
const defaultFunction = () => {
     console.log("I am a default function...");
}

export default defaultFunction;