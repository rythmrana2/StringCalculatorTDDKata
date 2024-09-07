export class StringCalculator {
    Add(numbers: string): number {
        let correctedInput = numbers;
        let answer = 0;
        if (correctedInput !== "") {
            let delimiter = '\n';
            if (correctedInput.startsWith("//")) {
                delimiter = '[' + delimiter + correctedInput[2] + ']';
                correctedInput = correctedInput.slice(4);
            }
            let alteredNumbers = correctedInput.replace(new RegExp(delimiter, 'g'), ',');
            let toBeParsedNumbers = alteredNumbers.split(',');
            answer = toBeParsedNumbers.reduce((accumulator, currentValue) => {
                let parsedNumber = parseInt(currentValue);
                if (parsedNumber < 0) {
                    throw new Error("negatives not allowed " + parsedNumber);
                }
                return accumulator += parsedNumber;
            }, 0);
        }
        return answer;
    }
}