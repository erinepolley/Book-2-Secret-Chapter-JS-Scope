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
// let conjoinedword;
// const conjunction = function (firstWord, secondWord) {
//     conjoinedWord = `${firstWord} ${secondWord}`
// }

// conjunction("Master", "Card")
// console.log("WITH VARIABLE DEFINED BEFORE FUNCTION", conjoinedWord)


//Completed this one! Finally figured out there wasn't a "show-info" class 
//in html. Fixed that, and it worked!
    const ModSquad = {
        "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        "series": {
            "start": "1968",
            "end": "1973"
        }
    }

    let HTMLRepresentation = `<h1>The Mod Squad</h1>`

    ModSquad.members.forEach(member => {
        console.log(member)
        return HTMLRepresentation += `<div>${member}</div>`
    })

console.log(HTMLRepresentation);
document.querySelector(".show-info").innerHTML = HTMLRepresentation

const locations = [[1,1], [1,2], [5,3], [2,1], [2,2], [4,3]]

let invalidLocation = 0
for (let k = 0; k < locations.length; k++) {
    currentLocation = locations[k]

    if (currentLocation[0] > 2) {
        invalidLocation += 1
        console.log("This location is invalid")
        
    }
}

/*
    Since k is used as the loop counter, it will be the
    total number of locations, not the invalid ones. You
    need to fix this somehow.
*/

//Got this to work, but had to reduce it to one function.
//I don't think that was the intent of the exercise.
console.log(`There were ${invalidLocation} invalid locations`)

const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
const randomizer = Math.floor(Math.random() * 7)
const llamaNamer = function () {
        const suffix = " the Llama"
        const name = possibleNames[randomizer]
        return name + suffix
    }

const nameMaker = llamaNamer()
console.log(nameMaker)