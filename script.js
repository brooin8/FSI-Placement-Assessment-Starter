// HINT: You can delete this console.log after you no longer need it!
console.log('JavaScript code has loaded!')

// First, tell us your name
let yourName = "Andrew Castellanos" // HINT: Replace this with your own name!

// We'll use these variables to track the counts of each cookie type
let gb =  0      // Gingerbread
let cc = 0      // Chocolate Chip
let sugar = 0   // Sugar Sprinkle
let total = 0   // Total Count
// Code to update name display 
document.getElementById('credit').textContent = `Created by ${yourName}`




// -----------------Gingerbread----------------
// Event listener for clicks on the "+" button for Gingerbread cookies
document.getElementById('add-gb').addEventListener('click', function() {
    // HINT: You can delete this console.log after you no longer need it!
    console.log('Gingerbread + button was clicked!')
// TODO: Write the code to be run when the "+" button for "Gingerbread" is clicked

})

document.getElementById('minus-gb').addEventListener('click', function() {
       console.log('Gingerbread - button was clicked!')

})



// -----------------Chocolate Chip----------------
document.getElementById('add-cc').addEventListener('click', function() {
    console.log('Chocolate Chip + button was clicked!')

})

document.getElementById('minus-cc').addEventListener('click', function() {
       console.log('Chocolate Chip - button was clicked!')

})



// -----------------Sugar Sprinkle----------------
document.getElementById('add-sugar').addEventListener('click', function() {
    console.log('Sugar Sprinkle + button was clicked!')

})

document.getElementById('minus-sugar').addEventListener('click', function() {
       console.log('Sugar Sprinkle - button was clicked!')

})




// TODO: Hook up event listeners for the rest of the buttons
// -----------------Gingerbread event listener----------------
document.getElementById('add-gb').addEventListener('click', function (){
    gb ++
    document.querySelector('#qty-gb').textContent = gb
})


// -----------------Chocolate Chip event listener----------------
document.getElementById('add-cc').addEventListener('click', function (){
    cc ++
    document.querySelector('#qty-cc').textContent = cc
})


// -----------------Sugar Sprinkle event listener----------------
document.getElementById('add-sugar').addEventListener('click', function (){
    sugar ++
    document.querySelector('#qty-sugar').textContent = sugar
})





// -----------------Subtraction Button Count Remover----------------
document.getElementById('minus-gb').addEventListener('click', function (){
    gb --
    document.querySelector('#qty-gb').textContent = gb

})

document.getElementById('minus-cc').addEventListener('click', function (){
    cc --
    document.querySelector('#qty-cc').textContent = cc
})

document.getElementById('minus-sugar').addEventListener('click', function (){
    sugar --
    document.querySelector('#qty-sugar').textContent = sugar
})





// -----------------QTY additive Total----------------
document.getElementById('add-gb').addEventListener('click', function (){
    total ++
    document.querySelector('#qty-total').textContent = total
})
document.getElementById('add-cc').addEventListener('click', function (){
    total ++
    document.querySelector('#qty-total').textContent = total
})
document.getElementById('add-sugar').addEventListener('click', function (){
    total ++
    document.querySelector('#qty-total').textContent = total
})


// -----------------QTY subtractive Total----------------
document.getElementById('minus-gb').addEventListener('click', function (){
    total --
    document.querySelector('#qty-total').textContent = total
})
document.getElementById('minus-cc').addEventListener('click', function (){
    total --
    document.querySelector('#qty-total').textContent = total
})
document.getElementById('minus-sugar').addEventListener('click', function (){
    total --
    document.querySelector('#qty-total').textContent = total
})
