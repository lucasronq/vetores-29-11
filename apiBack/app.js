const express = require('express')
require('dotenv').config();
const app = express();
const port = process.env.PORT;

function ordenarVetor(vetor) {
    return vetor.slice().sort((a, b) => a - b);
}
function encontrarMinMax(vetor) {
    if (vetor.length === 0) {
      return { menor: null, maior: null };
    }
  
    const sortedArray = ordenarVetor(vetor);
    const menor = sortedArray[0];
    const maior = sortedArray[sortedArray.length - 1];
  
    return { menor, maior };
  }
  
//@ Cria uma rota para o endereço raiz.
app.get('/', (req, res) => {

let vetorNaoOrdenado = [5, 2, 8, 14, 7, 10, 1, 18];

let jsonData = JSON.stringify({ vetor: vetorNaoOrdenado });

const vetorOrdenado = ordenarVetor(vetorNaoOrdenado);

const { menor, maior } = encontrarMinMax(vetorNaoOrdenado);

res.json({ vetorOrdenado, menor, maior });
});

app.listen(port, () => {
console.log('Executando a aplicação ' , process.env.APP_NAME);
console.log('Example app listening on port ', port);
});
  