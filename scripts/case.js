/*
1. Add event listener to the plus button
2. Get value inside case input field
3. Convert the string to an integer
4. Calculate new case number
5. Set value to case number field
*/

function caseQuantityUpdate(plus){
    const caseInputField = document.getElementById('case-input-field');
    const caseInputString = caseInputField.value;
    const previousCaseQtyInt = parseInt(caseInputString);

    
    let newCaseQtyInt;
    if(plus){
        newCaseQtyInt = previousCaseQtyInt + 1;
    }
    else{
        newCaseQtyInt = previousCaseQtyInt - 1;
        if(newCaseQtyInt === 0){
            alert('Quantity cannot be negative')
        }
    }
    caseInputField.value = newCaseQtyInt;

    return newCaseQtyInt
}

function casePriceUpdate(caseQty){
    const caseTotalPrice = caseQty * 59;
    caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText = caseTotalPrice;
}

document.getElementById('btn-case-plus').addEventListener('click',function(){
    const newCaseQty = caseQuantityUpdate(true);
    
    casePriceUpdate(newCaseQty);
    calculateTotal();
});

document.getElementById('btn-case-minus').addEventListener('click',function(){
    const newCaseQty = caseQuantityUpdate(false);
    
    casePriceUpdate(newCaseQty);
    calculateTotal();
});

// document.getElementById('btn-case-plus').addEventListener('click',function(){
//     const caseInputField = document.getElementById('case-input-field');
//     const caseInputString = caseInputField.value;
//     const previousCaseNumberInt = parseInt(caseInputString);
//     const newCaseNumberInt = previousCaseNumberInt + 1;
//     caseInputField.value = newCaseNumberInt;
//     const caseTotalPrice = newCaseNumberInt * 59;
//     caseTotalElement = document.getElementById('case-total');
//     caseTotalElement.innerText = caseTotalPrice;
// });

// document.getElementById('btn-case-minus').addEventListener('click',function(){
//     const caseInputField = document.getElementById('case-input-field');
//     const caseInputString = caseInputField.value;
//     const previousCaseNumberInt = parseInt(caseInputString);
//     const newCaseNumberInt = previousCaseNumberInt - 1;
//     if(newCaseNumberInt === 0){
//         alert('Quantity cannot be negative')
//     }
//     caseInputField.value = newCaseNumberInt;
//     const caseTotalPrice = newCaseNumberInt * 59;
//     caseTotalElement = document.getElementById('case-total');
//     caseTotalElement.innerText = caseTotalPrice;
// });