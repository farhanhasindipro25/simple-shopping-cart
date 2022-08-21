/*
1. Add event listener to the plus button
2. Get value inside case input field
3. Convert the string to an integer
4. Calculate new case number
5. Set value to case number field
*/

function phoneQuantityUpdate(plus){
    const phoneInputField = document.getElementById('phone-input-field');
    const phoneInputString = phoneInputField.value;
    const previousPhoneQtyInt = parseInt(phoneInputString);

    let newPhoneQtyInt;
    if(plus){
        newPhoneQtyInt = previousPhoneQtyInt + 1;
    }
    else{
        newPhoneQtyInt = previousPhoneQtyInt - 1;
        if(newPhoneQtyInt === 0){
            alert('Quantity cannot be negative')
        }
    }
    phoneInputField.value = newPhoneQtyInt;

    return newPhoneQtyInt
}

function phonePriceUpdate(phoneQty){
    const phoneTotalPrice = phoneQty * 1219;
    phoneTotalElement = document.getElementById('phone-total');
    phoneTotalElement.innerText = phoneTotalPrice;
}


document.getElementById('btn-phone-plus').addEventListener('click',function(){
    const newPhoneQty = phoneQuantityUpdate(true);
    
    phonePriceUpdate(newPhoneQty);
    calculateTotal();
});

document.getElementById('btn-phone-minus').addEventListener('click',function(){
    const newPhoneQty = phoneQuantityUpdate(false);
    
    phonePriceUpdate(newPhoneQty);
    calculateTotal();
});