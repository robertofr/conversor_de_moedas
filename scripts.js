// Obtendo os elementos do Formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");


// Manipulando o valor digitado no input para receber números
amount.addEventListener("input", () => {
    const hasCharacterRegex = /\D+/g
    amount.value = amount.value.replace(hasCharacterRegex, "")
})

// Manipulando o input do currency
form.onsubmit = (event) => {
    event.preventDefault()

    console.log(currency.value)
}