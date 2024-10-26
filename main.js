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
quantityNumber.addEventListener('input', updateTotalPrice);  // When quantity changes.

//Task 4- Handle Order Submission
const placeOrderButton = document.getElementById('place-order');  // Button to place the order
const orderSummary = document.getElementById('order-summary');  // Area to show the order summary

// Event listener that handles the order submission
placeOrderButton.addEventListener('click', () => {
    const selectedGame = gameSelector.options[gameSelector.selectedIndex].text;  // Gets selected game name and price
    const quantity = quantityNumber.value;  // Gets the quantity entered
    const totalPrice = totalPriceElement.textContent;  // Gets the calculated total price
    
 // Displays the order summary with the video game you bought
 orderSummary.textContent = `Congratulations on your purchase of ${quantity} copy/copies of ${selectedGame}! Hope you enjoy grinding through it. 
 Total cost: $${totalPrice}`;
});