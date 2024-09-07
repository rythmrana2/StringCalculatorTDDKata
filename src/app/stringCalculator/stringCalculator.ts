export class StringCalculator {
    //to count the number of times Add function was invoked
    static CountForAdd: number = 0;

    Add(numbers: string): number {
        StringCalculator.CountForAdd++;
        let correctedInput = numbers.slice(0);
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
        let correctedInput = input.slice(0);
        let delimiter = delim.slice(0);
        if (correctedInput.startsWith("//[")) {
            //slicing from after '//'
            correctedInput = correctedInput.slice(2);
            while (correctedInput[0] == '[') {
                delimiter = delimiter + '|' + (Array.from(correctedInput.substring(correctedInput.indexOf('[') + 1, correctedInput.indexOf(']'))).map(character => {
                    //checking if any of the delimiter is a special character in regex and if any is then escaping it
                    if (['.', '+', '*', '?', '^', '$', '(', ')', '[', ']', '{', '}', '|', '\\'].includes(character)) {
                        character = '\\' + character;
                    }
                    return character;
                })).join('');
                correctedInput = correctedInput.slice(correctedInput.indexOf(']') + 1);
            }
            correctedInput = correctedInput.slice(1);
        }
        else if (correctedInput.startsWith("//")) {
            delimiter = delimiter + '|' + (Array.from(correctedInput.substring(correctedInput.indexOf('/') + 2, correctedInput.indexOf('\n'))).map(character => {
                //checking if the delimiter is a special character in regex and if it is then escaping it
                if (['.', '+', '*', '?', '^', '$', '(', ')', '[', ']', '{', '}', '|', '\\'].includes(character)) {
                    character = '\\' + character;
                }
                return character;
            })).join('');
            //slicing as first 4 characters are delimiter information
            correctedInput = correctedInput.slice(4);
        }
        return [correctedInput, delimiter];
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