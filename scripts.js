// Cotação de moedas do dia
const USD = 5.36
const EUR = 6.23
const GBP = 7.18

// Obtendo os elementos do Formulário
const form = document.querySelector("form");
const amount = document.getElementById("amount");
const currency = document.getElementById("currency");
const footer = document.querySelector("main footer");
const description = document.getElementById("description");
const result = document.getElementById("result");


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
        // Atualizando a cotação da moeda selecionada
        description.textContent = `${symbol} 1 = ${formatCurrencyBRL(price)}`

        // Calculando o valor total
        let total = amount * price 

        // Verificando se o valor é um número
        if (isNaN(total)){
            return alert("Por favor, insira um valor válido.")
        }

        // Formatando o valor para o padrão brasileiro e removendo o símbolo de Real
        total = formatCurrencyBRL(total).replace("R$", "")

        // Exibindo o resultado formatado
        result.textContent = `${total} Reais`
        
        // Aplica a class que exibe o footer para mostrar o resultado
        footer.classList.add("show-result")

    } catch (error){
        // Remove a class que exibe o footer para esconder o resultado
        footer.classList.remove("show-result")
        console.log(error)
        alert("Ocorreu um erro, tente novamente mais tarde.")
    }
}

// Formata o valor para o padrão brasileiro
function formatCurrencyBRL(value){
    // Converte o valor para o formato brasileiro
    return Number(value).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })
}