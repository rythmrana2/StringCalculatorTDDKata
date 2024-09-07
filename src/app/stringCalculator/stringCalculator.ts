export class StringCalculator {
    Add(numbers: string): number {
        let correctedInput = numbers;
        let answer = 0;
        if (correctedInput !== "") {
            let delimiter = '\n';
            if (correctedInput.startsWith("//")) {
                delimiter = '[' + delimiter + correctedInput[2] + ']';
                //slicing as first 4 characters are delimiter information
                correctedInput = correctedInput.slice(4);
            }
            let alteredNumbers = correctedInput.replace(new RegExp(delimiter, 'g'), ',');
            answer = this.getAnswerFromString(alteredNumbers);
        }
        return answer;
    }

    //helper function has decreased main function size and separated logic that is not required to be shown in main function
    getAnswerFromString(alteredNumbers) {
        let toBeParsedNumbers = alteredNumbers.split(',');
        let negativeNumbers = [];
        let solution = toBeParsedNumbers.reduce((accumulator, currentValue) => {
            let parsedNumber = parseInt(currentValue);
            if (parsedNumber < 0) {
                negativeNumbers.push(parsedNumber);
            }
            return accumulator += parsedNumber;
        }, 0);
        if (negativeNumbers.length > 0) {
            throw new Error("negatives not allowed " + negativeNumbers.join(", "));
        }
        return solution;
    }
}