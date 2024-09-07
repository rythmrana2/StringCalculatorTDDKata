export class StringCalculator {
    Add(numbers: string): number {
        let answer = parseInt(numbers);
        if (!isNaN(answer)) {
            let parsedNumbers = numbers.split(',');
            answer = parsedNumbers.reduce((accumulator, currentValue) => {
                return accumulator += parseInt(currentValue);
            }, 0);
        }
        //as logical OR returns second operand if both operands are falsy
        return (answer || 0);
    }
}