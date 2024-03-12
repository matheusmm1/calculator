// global variables
const numberBttns = Array.from(document.querySelectorAll("#calculator #buttons .numbers"))
let currentValue = document.querySelector("#calculator #screen #currentValue")
let previousValue = document.querySelector("#calculator #screen #previousValue")
let storedNum
const divided = document.querySelector("#calculator #buttons .operators")
const plus = document.querySelector("#calculator #buttons .operators").nextElementSibling
const minus = document.querySelector("#calculator #buttons .operators").nextElementSibling.nextElementSibling
const times = document.querySelector("#calculator #buttons .operators").nextElementSibling.nextElementSibling.nextElementSibling
const equals = document.querySelector("#calculator #buttons #equals")
const clear = document.querySelector("#calculator #buttons #clear")

//numbers appear on screen when clicked
numberBttns.forEach(function(i){
    i.addEventListener("click", function(){
        currentValue.textContent += i.textContent
    })
})

//getting variable values
divided.addEventListener("click", function(){
    storedNum = currentValue.textContent
    currentValue.textContent = ""
    previousValue.textContent += storedNum + "/"
})

times.addEventListener("click", function(){
    storedNum = currentValue.textContent
    currentValue.textContent = ""
    previousValue.textContent += storedNum + "*"
})

plus.addEventListener("click", function(){
    storedNum = currentValue.textContent
    currentValue.textContent = ""
    previousValue.textContent += storedNum + "+"
})

minus.addEventListener("click", function(){
    storedNum = currentValue.textContent
    currentValue.textContent = ""
    previousValue.textContent += storedNum + "-"
})

//evaluates previousValue and gives answer
equals.addEventListener("click", function(){
    previousValue.textContent += currentValue.textContent
    currentValue.textContent = eval(previousValue.textContent)
})

//clears the screen
clear.addEventListener("click", function(){
    currentValue.textContent = ""
    previousValue.textContent = ""
    storedNum = 0
})