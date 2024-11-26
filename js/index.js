// Elementos HTML
const insereCidade = document
.querySelector(".input-cidade");

const btPesquisar = document
.querySelector(".botao-busca");

const displayCidade = document
.querySelector(".cidade");

const displayTemperatura = document
.querySelector(".temp");

const displayTempo = document
.querySelector(".texto-previsao");

// Eventos
async function gerarResultados()
{
    // Inserir a chave de API Open Weather
    const chaveAPI = "";
    let nomeCidade = insereCidade.value;
    console.log(nomeCidade);
    const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${nomeCidade}&appid=${chaveAPI}&units=metric&lang=pt_br`
    )
    .then(
        resposta=>resposta.json()
    );
    displayCidade.textContent = `${res.name}`;
    displayTemperatura.textContent = `Temperatura: ${Math.round(res.main.temp)}°C`;
    displayTempo.textContent = `Tempo: ${res.weather[0].description}`;
}

btPesquisar.addEventListener("click", gerarResultados);
