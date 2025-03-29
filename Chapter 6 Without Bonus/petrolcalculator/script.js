// This ensures that the Document Object Model(DOM) or the contents load first before the script gets executed
window.addEventListener("DOMContentLoaded", function () {
    // Once the DOM is loaded and the script is executed, this gets the references from the HTML, such as the inputs and references them into a variable
    // It uses the ID as its element tag
    const priceInput = document.getElementById("price"); //Price input
    const litersInput = document.getElementById("liters"); //Liters input
    const calculateButton = document.getElementById("calculate"); //Calculate button
    const resultDisplay = document.getElementById("result"); //Result output

    // Function to calculate the total cost
    function calculateTotalCost() {
        // First it turns the values into floats instead of strings. The || or the "or" logic checks if the input is invalid or empty, if it is, it defaults to 0.
        const pricePerLiter = parseFloat(priceInput.value) || 0;
        const litersPurchased = parseFloat(litersInput.value) || 0;
        
        // Formula for calculating the total cost. Price Multiplied by the liters.
        const totalCost = pricePerLiter * litersPurchased;
        
        // Display the result with two decimal places
        // This also updates the p tag from the HTML to the total cost or the output
        resultDisplay.textContent = `Total Cost: ${totalCost.toFixed(2)} AED`;
    }
    //The code wouldn't work if the button doesn't work, so
    // An event listener is added to the button to trigger the calculation
    // So this works when the button is clicked
    calculateButton.addEventListener("click", calculateTotalCost); 

    // Another event listeners are added the input fields to allow pressing 'Enter' to calculate
    priceInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") calculateTotalCost();
    });
    litersInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") calculateTotalCost();
    });
});
