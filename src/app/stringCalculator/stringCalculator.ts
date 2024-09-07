export class StringCalculator {
    Add(numbers: string): number {
        let correctedInput = numbers;
        let answer = 0;
        if (numbers !== "") {
            let delimiter = '\n';
            if (numbers.startsWith("//")) {
                delimiter = '[' + delimiter + numbers[2] + ']';
                correctedInput = correctedInput.slice(4);
            }
            let alteredNumbers = correctedInput.replace(new RegExp(delimiter, 'g'), ',');
            let toBeParsedNumbers = alteredNumbers.split(',');
            answer = toBeParsedNumbers.reduce((accumulator, currentValue) => {
                return accumulator += parseInt(currentValue);
            }, 0);
        }
        return answer;
    }
}