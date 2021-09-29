//References to elements on the page
const cashAmt = document.querySelector('.cash')
const form1 = document.querySelector('.form1')
const currencySelection = document.querySelector('.currencySelect')
const currentRate = document.querySelector('.currentRate')
const calcBtn = document.querySelector('.calcBtn')
const clrBtn = document.querySelector('.clrBtn')
const total = document.querySelector('.convertedValue')
const errMsg = document.querySelector('.errMsg')

const regEx = /^\d+(\.\d*)?$|^\.\d+$/


//Display current date on page
let datePara = document.querySelector('.datePara')
datePara.textContent = new Date().toDateString()

//Function to perform calculation based on the input selected
//'Change" is used as the event trigger, it tracks the change in the selection group
currencySelection.addEventListener('change', () => {

    if (currencySelection.value === 'usd') {
        currencies().then(data => {
            calcUsd = data.conversion_rates.JMD
            currentRate.textContent = `\$${calcUsd.toFixed(2)}`
            currRateCalcValue = calcUsd.toFixed(2)
        });
    }
    else if (currencySelection.value === 'gbp') {
        currencies().then(data => {
            calcGbp = (1 / (data.conversion_rates.GBP)) * data.conversion_rates.JMD
            currentRate.textContent = `\$${calcGbp.toFixed(2)}`
            currRateCalcValue = calcGbp.toFixed(2)
        })
    }

    else if (currencySelection.value === 'cad') {
        currencies().then(data => {
            calcCad = (1 / (data.conversion_rates.CAD)) * data.conversion_rates.JMD
            currentRate.textContent = `\$${calcCad.toFixed(2)}`// the /escapes the dollar sign
            currRateCalcValue = calcCad.toFixed(2)
        })
    }

    else if (currencySelection.value === 'eur') {
        currencies().then(data => {
            calcEur = (1 / (data.conversion_rates.EUR)) * data.conversion_rates.JMD
            currentRate.textContent = `\$${calcEur.toFixed(2)}`
            currRateCalcValue = calcEur.toFixed(2)
        })
    }

    else if (currencySelection.value === 'kyd') {
        currencies().then(data => {
            calcKyd = (1 / (data.conversion_rates.KYD)) * data.conversion_rates.JMD //curr xchange rate
            currentRate.textContent = `\$${calcKyd.toFixed(2)}` //value displayed as rate
            currRateCalcValue = calcKyd.toFixed(2) //value used to calculate
        })
    }

});

//API FUNCTION
const currencies = async () => {
    const response = await fetch(' https://v6.exchangerate-api.com/v6/e0a0d5980401e211ef627e93/latest/USD')
    const data = await response.json()
    return data
}

//Function to validate the cash input 
cashAmt.addEventListener('keyup', e => {
    if (regEx.test(e.target.value)) {
        true;
        errMsg.style.visibility = "hidden"
    } else {
        errMsg.style.visibility = "visible"
        cashAmt.value = ""
        total.value = ""
    }
})

//function to check for empty values
function checkEmptyVals() {
    if (cashAmt.value === '') {
        alert('There are empty values')
        total.textContent = ''
        currentRate.innerHTML = ''
    }
}

//Perform Calculation
calcBtn.addEventListener('click', () => {
    calcValue = (Number(currRateCalcValue * `$${cashAmt.value}`).toFixed(2))
    total.textContent = `$${calcValue}`
    checkEmptyVals()
})

//clear form
clrBtn.addEventListener('click', () => {
    window.location.reload()
})
