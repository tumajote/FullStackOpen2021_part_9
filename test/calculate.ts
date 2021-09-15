type Operation = 'multiply' | 'add' | 'divide'

const calculator = (a: number, b: number, op: Operation): number => {
    switch (op) {
        case 'multiply':
            return a * b
        case 'add':
            return a + b
        case 'divide':
            if (b === 0) throw new Error("Cant't divide by zero")
            return a / b
        default:
            throw new Error('Operation is not multply, add or divide!')
    }
}

try {
    console.log(calculator(1, 5, 'divide'))
} catch (e : any) {
    console.log('Something went wrong, error message:', e.message)
}