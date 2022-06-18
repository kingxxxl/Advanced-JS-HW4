//create an array of characters that has these properties (name, height, gender, mass, eye color)
let arrayOfCharacters = [
    {name: "Zaid", firstName: "Ali", height: 180, gender: 'M', mass: 200, eyeColor: "Blue"},
    {name: "Marim", firstName: "Ahmed", height: 200, gender: 'F', mass: 90, eyeColor: "Blue"},
    {name: "Fisal", firstName: "Osman", height: 190, gender: 'M', mass: 250, eyeColor: "Blue"},
    {name: "Sarah", firstName: "Farhad", height: 160, gender: 'F', mass: 55, eyeColor: "Blue"},]


console.log("MAP")
//MAP
// Get array of objects with just name and height properties
// Get array of all first names
let arrayNameAndHeight = arrayOfCharacters.map((c) => {
        let b = new Array();
        b.push(c.name)
        b.push(c.height);
        return b
    }
)
console.log(arrayNameAndHeight)

let firstNames = arrayOfCharacters.map((c) => c.firstName)
console.log(firstNames)


console.log("REDUCE")

//REDUCE
// Get total mass of all characters
// Get total number of characters in all the character names

let totalMass = arrayOfCharacters.reduce((sum, c) => sum + c.mass, 0);
console.log("Total mass of all characters is: " + totalMass)

console.log("Number of characters is: " + arrayOfCharacters.reduce((count) => count + 1, 0))

//FILTER
// Get characters with mass greater than 100
// Get all female characters

console.log("FILTER")

console.log("Get characters with mass greater than 100")
let massGreaterThan100 = arrayOfCharacters.filter((c) => c.mass > 100)
console.log(massGreaterThan100)

console.log("Get all female characters")
let femaleCharacters = arrayOfCharacters.filter((c) => c.gender === 'F')
console.log(femaleCharacters)


//SORT
// Sort by name
// Sort by gender
console.log("SORT")


console.log("Sort by name")
let sortByName = arrayOfCharacters.sort((c, b) => c.name.localeCompare(b.name))
console.log(sortByName)
console.log("Sort by gender")
let sortByGender = arrayOfCharacters.sort((c, b) => c.gender.localeCompare(b.gender))
console.log(sortByGender)

//EVERY
// Does every character have blue eyes?
// Is every character male?
console.log("EVERY")

console.log("Does every character have blue eyes?")
let isEveryCharacterHaveBlueEyes = arrayOfCharacters.every((c) => c.eyeColor === "Blue")
console.log(isEveryCharacterHaveBlueEyes)

console.log("Is every character male?")
let isEveryCharacterMale = arrayOfCharacters.every((c) => c.gender === 'M')
console.log(isEveryCharacterMale)

//SOME
// Is there at least one male character?
// Is there at least one character that has mass less than 50?
console.log("SOME")


console.log("Is there at least one male character?")
let isThereAtLeastOneMale = arrayOfCharacters.some((c) => c.gender === 'M')
console.log(isThereAtLeastOneMale)

console.log("Is there at least one character that has mass less than 50?")
let isAtLeastOneHasMassLessThan50 = arrayOfCharacters.some((c) => c.mass < 50)
console.log(isAtLeastOneHasMassLessThan50)