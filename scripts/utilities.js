function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const currentTotalPriceString = element.innerText;
    const currentTotalPrice = parseInt(currentTotalPriceString);
    return currentTotalPrice;
}

function setTextElementValueById(elementId,value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function calculateTotal(){
    // Calculate Subtotal
    const currentPhoneTotal = getTextElementValueById('phone-total');
    const currentCaseTotal = getTextElementValueById('case-total');

    const newSubTotal = currentPhoneTotal + currentCaseTotal;
    setTextElementValueById('sub-total',newSubTotal)

    // Calculate Tax
    // Tax: 10%
    const taxAmountString = (newSubTotal * 0.1).toFixed(2);
    const taxAmount = parseFloat(taxAmountString);
    setTextElementValueById('tax-amount',taxAmount)

    // Calculate final total
    const finalAmount = newSubTotal + taxAmount;
    setTextElementValueById('final-total',finalAmount);
}