export class StringCalculator {
    Add(numbers: string): number {
        let answer = 0;
        if (numbers !== "") {
            let alteredNumbers = numbers.replace(new RegExp('\n', 'g'), ',');
            let toBeParsedNumbers = alteredNumbers.split(',');
            answer = toBeParsedNumbers.reduce((accumulator, currentValue) => {
                return accumulator += parseInt(currentValue);
            }, 0);
        }
        return answer;
    }
}