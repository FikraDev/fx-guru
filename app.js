//References to elements on the page

const cashAmt = document.querySelector('.cash');
const form1 = document.querySelector('.form1');
const currencySelection = document.querySelector('.currencySelect');
const currentRate = document.querySelector('.currentRate');
const calcBtn = document.querySelector('.calcBtn')
const clrBtn = document.querySelector('.clrBtn')
const total = document.querySelector('.convertedValue')

const regEx = /^\d+$/;

//Function to validate the cash input 

// cashAmt.addEventListener('keyup', e => {
//     if (regEx.test(e.target.value)) {
//         cashAmt.setAttribute('class', 'success');
//     } else {
//         cashAmt.setAttribute('class', 'error');
//     }
// });

function valCashInput(){
    if (cashAmt.textContent.match(regEx)){
       
       true;
    } else{
        alert('Error')
    }
}


//API FUNCTION

const currencies = async () => {
    const response = await fetch(' https://v6.exchangerate-api.com/v6/e0a0d5980401e211ef627e93/latest/USD');
    const data = await response.json();
    return data;
}

//Function to perform calculation based on the input selected
//'Change" is used as the event trigger, it tracks the change in the selection group

currencySelection.addEventListener('change', () => {

    if (currencySelection.value === 'usd') {
        currencies().then(data => { currentRate.textContent = data.conversion_rates.JMD.toFixed(2) });
    }
    else if (currencySelection.value === 'gbp') {
            currencies().then(data => {
                calcGbp = (1 / (data.conversion_rates.GBP)) * data.conversion_rates.JMD;
                currentRate.textContent = calcGbp.toFixed(2);
            })
        }
    
    else if (currencySelection.value === 'cad') {
            currencies().then(data => {
                calcCad = (1 / (data.conversion_rates.CAD)) * data.conversion_rates.JMD
                currentRate.textContent = calcCad.toFixed(2)
            })
        }
     
    else if (currencySelection.value === 'eur') {
            currencies().then(data => {
                calcCad = (1 / (data.conversion_rates.EUR)) * data.conversion_rates.JMD
                currentRate.textContent = calcCad.toFixed(2)
            })
        }

})

//Perform Calculation

calcBtn.addEventListener('click', () => {
    calcValue = (Number(currentRate.innerHTML * cashAmt.value).toFixed(2))

    total.textContent = "$" + `${calcValue}`;

    valCashInput();
})

//clear the form

clrBtn.addEventListener('click', () => {
    window.location.reload();
})