// Cotação de moedas do dia
const USD = 5.16
const EUR = 5.51
const GBP = 6.20

// Obtendo os elementos do Formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");


// Manipulando o valor digitado no input para receber números
amount.addEventListener("input", () => {
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, "")
})

// Manipulando o input do currency
form.onsubmit = (event) => {
    event.preventDefault()

    switch (currency.value) {
        case "USD":
            converterCurrency(amount.value, USD, "US$")
            break
        case "EUR":
            converterCurrency(amount.value, EUR, "€")
            break
        case "GBP":
            converterCurrency(amount.value, GBP, "£")
            break

    }         
}

// Função para converter o valor
function converterCurrency(amount, price, symbol){
    
    try{
        // Aplica a class que exibe o footer para mostrar o resultado
        footer.classList.add("show-result")
    } catch (error){
        // Remove a class que exibe o footer para esconder o resultado
        footer.classList.remove("show-result")
        console.log(error)
        alert("Ocorreu um erro, tente novamente mais tarde.")
    }
}