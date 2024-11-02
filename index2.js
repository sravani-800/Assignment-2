function calculateTotal() {
    const subtotal = parseFloat(document.getElementById("subtotal").value);
    const tipPercentage = parseFloat(document.getElementById("tipPercentage").value);

    if (isNaN(subtotal) || isNaN(tipPercentage) || subtotal < 0 || tipPercentage < 0) {
        document.getElementById("output").textContent = "Please enter valid positive numbers for subtotal and tip percentage.";
        return;
    }

    const tipAmount = (subtotal * tipPercentage) / 100;
    const totalAmount = subtotal + tipAmount;

    document.getElementById("output").textContent = `Total amount to be paid: $${totalAmount.toFixed(2)}`;
}

document.getElementById("calculateButton").addEventListener("click", calculateTotal);
