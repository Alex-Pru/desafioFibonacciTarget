// Questão 2

function includedInFibonacci(number){
    let fibonacciNumbers = [0, 1]
    let currentLoop = 0
    while(fibonacciNumbers.at(-1) < number){
        currentLoop = fibonacciNumbers.at(-2) + fibonacciNumbers.at(-1)
        fibonacciNumbers.push(currentLoop)
    }

    if(fibonacciNumbers.includes(number)) return "Pertence a Sequencia"
    else return "Não pertence a sequencia"
}

console.log(includedInFibonacci(987))
console.log(includedInFibonacci(1000))