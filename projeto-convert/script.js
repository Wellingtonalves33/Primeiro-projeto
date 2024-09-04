const convertButton = document.querySelector(".convert-Button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {
    //moeda-de-entrada//
    const inputCurrencyValue = document.querySelector(".input-currency").value //  isso é oq esta dentro do input  //
    // Valor da moeada para converter//
    const currencyValueToConvert = document.querySelector(".currency-value-to-convert") // valor em real   //
    //Valor da moeda//
    const currencyValueConverted = document.querySelector(".currency-value") // valor em dolar     //



    // Valor do dolar do dia//
    const dolarToday = 5.61
    const euroToday = 6.22
    const bitcoinToday = 332.831
    const libraToday = 7.38



    if (currencySelect.value == "dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday)
    }

    if (currencySelect.value == "euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }
    if (currencySelect.value == "libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ru-RU",
            {
                style: "currency",
                currency: "GBP"
            }).format(inputCurrencyValue / libraToday)

    }
    if (currencySelect.value == "bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR",
            {
                style: "currency",
                currency: "BRL"
            }).format(inputCurrencyValue / bitcoinToday)

    }
    currencyValueToConvert.innerHTML = new Intl.NumberFormat('pt-BR',
        {
            style: "currency",
            currency: "BRL"
        }).format(inputCurrencyValue)
}
function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImage = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar"
        currencyImage.src='./'
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
 currencyImage.scr =".assests/euro.png"
    }
    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "libra"
         currencyImage.scr ="./assets/libra.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
    }

    convertValues()
}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)
// sempre fica atento a logica da progamaçao pois //as 