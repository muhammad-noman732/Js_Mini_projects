// understading the checked property of js 
const myCheckBox = document.getElementById("checkBox");
const visaBtn = document.getElementById("visaBtn");
const MastetCardBtn= document.getElementById("MastetCardBtn");
const payPalBtn = document.getElementById("payPalBtn");
const subResult = document.getElementById("subResult");
const payResult =  document.getElementById("payResult");
const subBtn = document.getElementById("submitBtn");


subBtn.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = `You are subscribed`;
    }
    else{
        subResult.textContent = `You are not subscribed`;
    }
    if(visaBtn.checked){
        payResult.textContent = `You are paying with visa `;
    }
    else if(MastetCardBtn.checked){
        payResult.textContent = `You are paying with MasterCard `;
    }
    else if(payPalBtn.checked){
        payResult.textContent = `You are paying with PayPal `;
    }
    else{
        
    payResult.textContent = `You must select a method for paying `;
    }
}