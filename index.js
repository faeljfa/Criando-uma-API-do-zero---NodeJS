//declarando as constantes e atribuindo os frameworks que serão utilizados no projeto.
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')

//Usando o express na constante app
const app = express();