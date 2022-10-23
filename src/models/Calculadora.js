
class Calculadora{
     static async soma (num1, num2){
        if (Number(num1) & Number(num2)){
        const resultadoSoma = num1 + num2
        return resultadoSoma
        }
        else throw new Error("nao sao numeros");
    }

    static async subtracao (num1, num2){
        if (Number(num1) & Number(num2)){
        const resultadoSubtracao = num1 - num2
        return resultadoSubtracao
        }
        else throw new Error("nao sao numeros");
    }

    static async multiplicacao (num1, num2){
        if (Number(num1) & Number(num2)){
        const resultadoMultiplicacao = num1 * num2
        return resultadoMultiplicacao
        }
        else throw new Error("nao sao numeros");
    }

    static async divisao (num1, num2){
        if (Number(num1) & Number(num2)){
        const resultadoDivisao = num1 / num2
        return resultadoDivisao
        }
        else throw new Error("nao sao numeros");
    }

    //static async somaplus (...numeros){
    //    return numeros.reduce((acumulador, numero) => acumulador + numero)
   // }
}

module.exports = Calculadora
