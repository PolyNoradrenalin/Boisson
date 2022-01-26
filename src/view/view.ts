// TODO: Make this a class maybe?

const greenColor = "\x1b[32m";
const resetColor = "\x1b[0m";
let readLineSync = require('readline-sync');

/**
 * Ask a question to the user and return the answer
 * @param question the question to ask
 * @param options the options to choose from
 * @returns {string} the answer chosen from the options
 * @throws {Error} if the answer is not in the options or if there's no options/answers
 */
export function choiceQuestion<T>(question: string, options: Map<string, T> ): string {
    if(options == null || options.size == 0){
        throw new Error("No options");
    }

    console.log(greenColor + question);

    for(let i = 0; i < options.size; i++) {
        console.log(i+1 + "- " + options.keys()[i]);
    }

    console.log(resetColor);

    let answer = readLineSync.question();

    if(answer >= 1 && answer <= options.size) {
        return options.values()[answer];
    } else {
        throw new Error("Invalid option");
    }
}


/**
 * Ask a yes/no question to the user
 * @param question the question to ask
 * @returns {boolean} true if the answer is yes, false if the answer is no
 * @throws Error if the answer is not yes or no (y or n)
 */
export function yesNoQuestion(question: string): boolean {
    console.log(greenColor + question + resetColor);

    let answer = readLineSync.question();

    if(answer === "y") {
        return true;
    } else if(answer === "n") {
        return false;
    } else {
        throw new Error("Invalid option");
    }
}


/**
 * Ask a question with a range of possible answers
 * @param question the question to ask
 * @param min the minimum value of the accepted range
 * @param max the maximum value of the accepted range
 * @returns the answer the user gave, as a number
 */
export function rangeQuestion(question: string, min: number, max: number): number {
    console.log(greenColor + question + resetColor);

    let answer = readLineSync.question();

    if(answer >= min && answer <= max) {
        return answer;
    } else {
        throw new Error("Invalid option");
    }
}