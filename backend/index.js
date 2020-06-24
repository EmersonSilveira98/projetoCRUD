const app = require('express')()
const consign = require('consign')
const db = require('./config/db')

app.db = db // faz com que quando você acessa o app.db na sua api, você ira fazer as alterações no banco de dados.

consign()
    .include('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api/validation.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)



app.listen(3333, () => {
    console.log('Servidor funcionando')
})