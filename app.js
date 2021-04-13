const cashAmt = document.querySelector(".cash");
const form1 = document.querySelector('.form1');
const currencySelection = document.querySelector('.currencySelect');
const currentRate = document.querySelector('.currentRate');
const calcBtn = document.querySelector('.calcBtn')
const clrBtn = document.querySelector('.clrBtn')
const total = document.querySelector('.convertedValue')

const regEx = /(?=.*?\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?(\.\d{1,2})?$/;

cashAmt.addEventListener('keyup', e =>{
    if(regEx.test(e.target.value)){
       cashAmt.setAttribute('class','success') ;      
    } else{
        cashAmt.setAttribute('class', 'error');
    }
});

//API FUNCTION

const currencies = async () =>{

    const response = await fetch(' https://v6.exchangerate-api.com/v6/e0a0d5980401e211ef627e93/latest/USD');
    const data = await response.json();
    return data;
    
}



// currencies().then(data=>{
//     console.log(data.conversion_rates.JMD.toFixed(2))
// });


currencySelection.addEventListener('change',()=>{ //change is used for select

    if (currencySelection.value==='usd'){
        currencies().then(data=>{currentRate.textContent= data.conversion_rates.JMD.toFixed(2)})
        
    }
    else{
        if (currencySelection.value==='gbp'){
            currencies().then(data=>{currentRate.textContent=data.conversion_rates.GBP.toFixed(2)})
            
        }
        
    }
})

//Perform Calculation

calcBtn.addEventListener('click',()=>{
    calcValue = (Number(currentRate.innerHTML * cashAmt.value).toFixed(2))

    total.textContent = "$" + `${calcValue}`
})

//clear the form

clrBtn.addEventListener('click', ()=>{
    window.location.reload();
})