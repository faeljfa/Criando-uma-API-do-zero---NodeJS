//declarando as constantes e atribuindo os packages que serão utilizados no projeto.
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser');

//adicionando o arquivo routes. Rotas criadas para uso da API
const routes = require('./config/routes')

//Usando o express na constante app
const app = express()

//adicionando o morgan para realização dos logs de execução
app.use(morgan('dev'))

//adicionando o body-parser para fazer a codificação da URL
app.use(bodyParser.urlencoded({extended:false}))

//utilizando para determinar o tipo de dados que vamos receber "json"
app.use(express.json())

//utilizando o cors para permitir que nossa API seja consumida de outros dominios
//não sera passado parametro pois a API sera consumida no localhost (Acrescentado apenas para efeito de estudo)
app.use(cors())

//Usando o routes no app
app.use(routes)

//Inicializando o servidor e passando a porta que será utilizada
app.listen(21262, () => {
    console.log('express started at http://localhost:21262')
})