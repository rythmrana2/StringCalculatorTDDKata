export class StringCalculator {
    Add(numbers: string): number {
        let answer = parseInt(numbers);
        //as logical OR returns second operand if both operands are falsy
        return (answer || 0);
    }
}