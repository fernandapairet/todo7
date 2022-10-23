const Calculadora = require("../models/Calculadora")

class Calculadora_controler{
    static async soma (req, res){
        try{
        const query = req.query
        const values = Object.values(query)
        const converteNumero = values.map((numero) => {
            return Number (numero)
        } )

        const resultadoSoma = await Calculadora.soma(...converteNumero)
        res.status(200).json(resultadoSoma)
    } catch(erro){
        res.status(400).json({mensagem:erro, erro: true})
    }
    }

    static async subtracao (req, res){
        try{
        const query = req.query
        const values = Object.values(query)
        const converteNumero = values.map((numero) => {
            return Number (numero)
        } )

        const resultadoSubtracao = await Calculadora.subtracao(...converteNumero)
        res.status(200).json(resultadoSubtracao)
    } catch(erro){
        res.status(400).json({mensagem:erro, erro: true})
    }
    }

    static async multiplicacao (req, res){
        try{
        const query = req.query
        const values = Object.values(query)
        const converteNumero = values.map((numero) => {
            return Number (numero)
        } )

        const resultadoMultiplicacao = await Calculadora.multiplicacao(...converteNumero)
        res.status(200).json(resultadoMultiplicacao)
    } catch(erro){
        res.status(400).json({mensagem:erro, erro: true})
    }
    }

    static async divisao (req, res){
        try{
        const query = req.query
        const values = Object.values(query)
        const converteNumero = values.map((numero) => {
            return Number (numero)
        } )

        const resultadoDivisao = await Calculadora.divisao(...converteNumero)
        res.status(200).json(resultadoDivisao)
    } catch(erro){
        res.status(400).json({mensagem:erro, erro: true})
    }
    }
        
    }


module.exports = Calculadora_controler