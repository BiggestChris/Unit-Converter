/*
1 metre = 3.281 feet
1 litre = 0.264 gallon
1 kilogram = 2.204 pound
*/
const numberInput = document.getElementById("number-input")
const lengthText = document.getElementById("length-text")
const volumeText = document.getElementById("volume-text")
const massText = document.getElementById("mass-text")
const convertBtn = document.getElementById("convert-btn")

let inputNumber = 1
let metreToFeet = Number(inputNumber * 3.281).toFixed(3)
let feetToMetre = Number(inputNumber / 3.281).toFixed(3)
let litreToGallon = Number(inputNumber * 0.264).toFixed(3)
let gallonToLitre = Number(inputNumber / 0.264).toFixed(3)
let kilogramToPound = Number(inputNumber * 2.204).toFixed(3)
let poundToKilogram = Number(inputNumber / 2.204).toFixed(3)


console.log(numberInput)



convertBtn.addEventListener("click", function() {
    inputNumber = Number(numberInput.value)
    if (!(Number.isInteger(inputNumber))) {
        inputNumber = inputNumber.toFixed(3)
    }
    metreToFeet = Number(inputNumber * 3.281).toFixed(3)
    feetToMetre = Number(inputNumber / 3.281).toFixed(3)
    litreToGallon = Number(inputNumber * 0.264).toFixed(3)
    gallonToLitre = Number(inputNumber / 0.264).toFixed(3)
    kilogramToPound = Number(inputNumber * 2.204).toFixed(3)
    poundToKilogram = Number(inputNumber / 2.204).toFixed(3)
        
    
    lengthText.textContent = `${inputNumber} metres = ${metreToFeet} feet | ${inputNumber} feet = ${feetToMetre} metres`
    
    volumeText.textContent = `${inputNumber} litres = ${litreToGallon} gallon | ${inputNumber} gallon = ${gallonToLitre} litres`
    
    massText.textContent = `${inputNumber} kilograms = ${kilogramToPound} pounds | ${inputNumber} pounds = ${poundToKilogram} kilograms`
})






console.log(`${inputNumber} metres = ${metreToFeet} feet`)
console.log(`${inputNumber} feet = ${feetToMetre} metres`)




console.log(`${inputNumber} litres = ${litreToGallon} gallon`)
console.log(`${inputNumber} gallon = ${gallonToLitre} litres`)




console.log(`${inputNumber} kilograms = ${kilogramToPound} pounds`)
console.log(`${inputNumber} pounds = ${poundToKilogram} kilograms`)
