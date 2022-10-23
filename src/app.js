// importação da biblioteca
const express = require("express")
const controler = require("./controler/calculadora_controler")

// cria um novo aplicativo a partir dessa função
const app = express()
app.use(express.json())

// configura a aplicação para responder a chamadas HTTP com o verbo GET
// caminho raiz da API
app.get("/", (req, res) => {
    res.send("teste")
})
// Rota
app.get("/soma", controler.soma)
app.get("/subtracao", controler.subtracao)
app.get("/multiplicacao", controler.multiplicacao)
app.get("/divisao", controler.divisao)

app.listen(3000, () => console.log("servidor rodando"))

module.exports = app