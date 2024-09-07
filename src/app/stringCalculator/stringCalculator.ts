export class StringCalculator {
    //to count the number of times Add function was invoked
    static CountForAdd: number = 0;

    Add(numbers: string): number {
        StringCalculator.CountForAdd++;
        let correctedInput = numbers;
        let answer: number = 0;
        if (correctedInput !== "") {
            let delimiter: string = '\n';
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

    //helper function has decreased main function size and separated logic that is not required to be shown in main function.
    getAnswerFromString(alteredNumbers: string): number {
        let toBeParsedNumbers: string[] = alteredNumbers.split(',');
        let negativeNumbers: number[] = [];
        let solution: number = toBeParsedNumbers.reduce((accumulator, currentValue) => {
            let parsedNumber = parseInt(currentValue);
            if (parsedNumber < 0) {
                negativeNumbers.push(parsedNumber);
            } else if (parsedNumber > 1000) {
                parsedNumber = 0;
            }
            return accumulator += parsedNumber;
        }, 0);
        if (negativeNumbers.length > 0) {
            throw new Error("negatives not allowed " + negativeNumbers.join(", "));
        }
        return solution;
    }

    GetCalledCount() {
        return StringCalculator.CountForAdd;
    }
}