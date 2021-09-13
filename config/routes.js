//declarando as constantes e atribuindo os packages que serão utilizados no arquivo de rotas.
const express = require('express')

//utilizando a biblioteca router do express para fazer as rotas
const routes = express.Router()

//exportando o módulo routes para que possa ser utilizado no projeto
module.exports = routes

//definindo as rotas

//rota para a pagina padrão recebendo dois parametros req e res que são abstraídos pelo express
//req é o parametro da requisição e res o da resposta
routes.get('/', (req, res) => {
    //fazendo o retorno no formato json da variável db definda acima
     return res.json(db)
})

//rota para excutar o arquivo responsavel por realizar o metodo post
routes.post('/add', (req, res) => {

    //constante adicionada para receber os dados ue estão vindo via método POST
    //recebe a requisição 'req.body'
    const body = req.body

    //verificando se o body existe. Caso não retorna pro usuário o erro 400
    if(!body){
        //fazendo o retorno da mensagem para o usuario. Mensagem enviada pelo metodo status
        return res.status(400).end()
    }

    //caso nao entre no if acima, ele faz o push na variável db, qe no caso é como se fosse o banco de dados 
    db.push(body)

    //Após realizar a inserção, realiza o retorno passando como parametro o body em formato json
    return res.json(body)
})