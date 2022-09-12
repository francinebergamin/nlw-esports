/*  1. O script iniciado roda tudo o que está nesse arquivo*/

// ECMAScript models
import express from 'express'

const app = express()


/* O get exige os seguintes parâmetros: 
   1. Endereço acesso pelo user, ex.: www.minhaapi.com/endereço 
   2. Função (requisição, resposta) 
   
    - requisição: busca informações do acesso do user
    - resposta: devolve uma resposta  */
app.get('/ads', (request, response) => {
  //função executada quando o user acessar a rota /ads
  return response.json([
    { id: 1, name: 'Anúncio 1'},
    { id: 2, name: 'Anúncio 2'},
    { id: 3, name: 'Anúncio 3'},
    { id: 4, name: 'Anúncio 4'},
    { id: 5, name: 'Anúncio 5'},
  ])
})


/* A função listen fica ouvindo a toda requisição feita pelo user,
   e quando qualquer acesso for feito, o script será executado,
   nesse caso, mostrando o console.log('Acessou Ads!') */
app.listen(3333)
