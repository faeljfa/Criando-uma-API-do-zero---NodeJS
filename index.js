//declarando as constantes e atribuindo os packages que serão utilizados no projeto.
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser');

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

//variavel declarada para servir como um banco de dados em tempo de execução
let db = [
    {'1' : {Nome: 'Clente 1', idade:'20'}},
    {'1' : {Nome: 'Clente 2', idade:'20'}},
    {'1' : {Nome: 'Clente 3', idade:'20'}}
]

//definindo as rotas

//rota para a pagina padrão recebendo dois parametros req e res que são abstraídos pelo express
//req é o parametro da requisição e res o da resposta
app.get('/', (req, res) => {
    //fazendo o retorno no formato json da variável db definda acima
     return res.json(db)
})

//Inicializando o servidor e passando a porta que será utilizada
app.listen(21262, () => {
    console.log('express started at http://localhost:21262')
})