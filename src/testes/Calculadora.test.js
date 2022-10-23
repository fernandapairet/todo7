const Calculadora = require("../models/Calculadora");

describe("Testar operacoes da model", () => {
    
    test("Testando operação soma", async () => {
        const soma = await Calculadora.soma(2, 3)
        expect (soma).toEqual(5)
    });
    
    test("Testando operacao soma com erro", async () => {
        try {
            const soma = await Calculadora.soma(2, "a")
        }
        catch (erro)
        {
            expect (erro).toBeTruthy()
        }
    });

    test("Testando operação subtração", async () => {
        const subtracao = await Calculadora.subtracao(3, 1)
        expect (subtracao).toEqual(2)
    });

    test("Testando operacao subtração com erro", async () => {
        try {
            const subtracao = await Calculadora.subtracao(2, "a")          
        }
        catch (erro)
        {
            expect (erro).toBeTruthy()
        }
    });

    test("Testando operação multiplicação", async () => {
        const multiplicacao = await Calculadora.multiplicacao(2, 3)
        expect (multiplicacao).toEqual(6)
    } )
    test("Testando operacao multiplicação com erro", async () => {
        try {
            const multiplicacao = await Calculadora.multiplicacao(2, "a")
        }
        catch (erro)
        {
            expect (erro).toBeTruthy()
        }
    })
    test("Testando operação divisão", async () => {
        const divisao = await Calculadora.divisao(30, 5)
        expect (divisao).toEqual(6)
    })
    test("Testando operacao divisão com erro", async () => {
        try {
            const divisao = await Calculadora.divisao(10, "a")
        }
        catch (erro)
        {
            expect (erro).toBeTruthy()
        }
    })
   
})

