//Task 2- Add Event Listener for Product Selection & Task 3- Calculate Total Price Dynamically
// setting up the elements from the HTML strucutre/ index file
const gameSelector = document.getElementById('Game-selector');  // Dropdown for video game selection
const quantityNumber = document.getElementById('quantity');  // number of video games
const totalPriceElement = document.getElementById('total-price');  // Displays the total price

// This updates total price based on selected video game and quantity/number 
function updateTotalPrice() {
    const gamePrice = parseFloat(gameSelector.value);  // Gets the price of selected video game
    const quantity = parseInt(quantityNumber.value);  // Gets the quantity as a number
    const totalPrice = gamePrice * quantity;  // Calculate total price
    
    totalPriceElement.textContent = totalPrice.toFixed(2);  // Display total price
}

// here are Event listeners to update total price when video game or quantity is changed by the customer AKA you BIG SPENDA
gameSelector.addEventListener('change', updateTotalPrice);  // When a different video game is selected
quantityNumber.addEventListener('input', updateTotalPrice);  // When quantity changes