export class StringCalculator {
    //to count the number of times Add function was invoked
    static CountForAdd: number = 0;

    Add(numbers: string): number {
        StringCalculator.CountForAdd++;
        let correctedInput = this.getArrayCopy(numbers, 0);
        let answer: number = 0;
        if (correctedInput !== "") {
            let delimiter: string = '\n';
            [correctedInput, delimiter] = this.getDelimiterAndChangeString(correctedInput, delimiter);
            let alteredNumbers = correctedInput.replace(new RegExp(delimiter, 'g'), ',');
            answer = this.getAnswerFromString(alteredNumbers);
        }
        return answer;
    }

    getDelimiterAndChangeString(input: string, delim: string): [string, string] {
        let correctedInput = this.getArrayCopy(input, 0);
        let delimiter = this.getArrayCopy(delim, 0);
        if (correctedInput.startsWith("//[")) {
            //slicing from after '//'
            correctedInput = this.removeDelimiterInformation(correctedInput, 2);
            while (correctedInput[0] == '[') {
                delimiter = this.buildDelimiter(delimiter, correctedInput, correctedInput.indexOf('[') + 1, correctedInput.indexOf(']'));
                correctedInput = this.removeDelimiterInformation(correctedInput, correctedInput.indexOf(']') + 1);
            }
            correctedInput = this.removeDelimiterInformation(correctedInput, 1);
        }
        else if (correctedInput.startsWith("//")) {
            delimiter = this.buildDelimiter(delimiter, correctedInput, correctedInput.indexOf('/') + 2, correctedInput.indexOf('\n'));
            correctedInput = this.removeDelimiterInformation(correctedInput, 4);
        }
        return [correctedInput, delimiter];
    }

    buildDelimiter(delimiter: string, input: string, substringStartingPosition, substringEndingPosition) {
        return (delimiter + '|' + (Array.from(input.substring(substringStartingPosition, substringEndingPosition)).map((character: string) => {
            //checking if the delimiter is a special character in regex and if it is then escaping it
            if (['.', '+', '*', '?', '^', '$', '(', ')', '[', ']', '{', '}', '|', '\\'].includes(character)) {
                character = '\\' + character;
            }
            return character;
        })).join(''));
    }

    removeDelimiterInformation(input: string, position: number) {
        return this.getArrayCopy(input, position);
    }

    //helper function has decreased main function size and separated logic that is not required to be shown in main function.
    getAnswerFromString(alteredNumbers: string): number {
        let toBeParsedNumbers: string[] = this.getNumbersFromString(alteredNumbers, ',');
        let negativeNumbers: number[] = [];
        let solution: number;
        [solution, negativeNumbers] = this.getSolutionFromNumbers(toBeParsedNumbers, negativeNumbers);
        if (negativeNumbers.length > 0) {
            throw new Error("negatives not allowed " + negativeNumbers.join(", "));
        }
        return solution;
    }

    getSolutionFromNumbers(numbers: string[], negativeNumbers: number[]): [number, number[]] {
        const solution: number = numbers.reduce((accumulator, currentValue) => {
            let parsedNumber = parseInt(currentValue);
            if (parsedNumber < 0) {
                negativeNumbers.push(parsedNumber);
            } else if (parsedNumber > 1000) {
                parsedNumber = 0;
            }
            return accumulator += parsedNumber;
        }, 0);
        return [solution, negativeNumbers];
    }

    getNumbersFromString(arrayName, delimiter) {
        return arrayName.split(delimiter)
    }

    getArrayCopy(arrayName, position = 0) {
        return arrayName.slice(position);
    }

    GetCalledCount() {
        return StringCalculator.CountForAdd;
    }
}