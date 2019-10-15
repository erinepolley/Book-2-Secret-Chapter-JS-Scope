console.log("Hello World")

const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let x = 1; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

//Next exercise. Must comment out the different sections to see the 
//different solutions. 

// //Solution number one with console.log within function.
// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`
//     console.log("WITH CONSOLE LOG IN BRACES", conjoinedWord)
// }

// conjunction("Master", "Card")


// //Solution number two with a return instead of "const"
// const conjunction = function (firstWord, secondWord) {
//     return conjoinedWord = `${firstWord} ${secondWord}`
    
// }

// conjunction("Master", "Card")
// console.log("WITH RETURN", conjoinedWord)



//Solution three with variable defined before function with let, then
//modified within function
let conjoinedword;
const conjunction = function (firstWord, secondWord) {
    conjoinedWord = `${firstWord} ${secondWord}`
}

conjunction("Master", "Card")
console.log("WITH VARIABLE DEFINED BEFORE FUNCTION", conjoinedWord)