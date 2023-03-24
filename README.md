# fx-guru Currency Converter


This is a simple currency converter app built using JavaScript that
allows users to convert Jamaican Dollars (JMD) to several other
currencies such as USD, GBP, CAD, EUR, and KYD. This app was created to
make it easy for users to convert Jamaican Dollars to their desired
currency, by fetching the current exchange rate from an API and
performing the conversion calculation automatically. 

## How to Use the Currency Converter

Using the currency converter is straightforward. Here are the steps to
follow:

- Enter the amount in Jamaican Dollars (JMD) you wish to convert into the
\"Amount\" field. 
- Select the currency you wish to convert to from the drop-down menu. 
- Click on the \"Calculate\" button to calculate the value of the selected currency based on the current exchange rate. 
- If you wish to clear the form, click on the \"Clear\" button.

Upon completion of the above steps, the total value of the currency you selected will be displayed in the \"Converted Value\" field. 

## Features of the Currency Converter

This currency converter app has several features that make it easy and
convenient to use. Some of the features of the app include:

- Users can convert Jamaican Dollars (JMD) to USD, GBP, CAD, EUR, and KYD.
- The app automatically fetches the current exchange rate from the API based on the currency selected. 
- The app can handle invalid input in the \"Amount\" field and notifies the user appropriately. 
- Users are alerted if they attempt to convert without entering an amount in the \"Amount\" field.
- Users can clear the form and start over.

## Code Overview

The app was built using HTML, CSS, and JavaScript. The JavaScript code
uses an API to fetch the current exchange rate and perform the currency
conversion calculation. The code also includes event listeners to ensure
the app responds to user input and provides appropriate feedback.

The `currencies` function is responsible for fetching the current exchange
rate from the API, which is used to calculate the conversion rate for
the selected currency. The function uses the `fetch` method to make a GET
request to the exchange rate API and retrieves the JSON response.

The `currencySelection` event listener is responsible for changing the
conversion rate based on the currency selected. When a new currency is
selected from the drop-down menu, the event listener triggers a call to
the `currencies` function to fetch the current exchange rate for the
selected currency.

The `cashAmt` event listener is responsible for validating the input in
the \"Amount\" field. The listener uses a regular expression to validate
the input and notifies the user appropriately if an invalid input is
detected.

Finally, the `calcBtn` and `clrBtn` event listeners are responsible for
performing the currency conversion calculation and clearing the form
respectively. The `checkEmptyVals` function is used to ensure that the
user enters an amount before attempting to convert. 
