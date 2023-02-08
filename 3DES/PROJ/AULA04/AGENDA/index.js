require('dotenv').config()
const PORT = process.env.PORT || 5000
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')

mongoose.connect(mongoDB, { useNewUrlParser: true});
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'Erro na Ligação ao MongoDB'));

const routes = require('./src/routes/routes')

const app = express()
    .use(express.json())
    .use(cors())
    .use(routes)

app.listen(PORT, () => {
    console.log('Serviço em execução na porta ' + PORT)
})