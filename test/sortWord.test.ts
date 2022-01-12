import { sortWord } from "../src/stringHelpers";

describe("SortedStringToAnagramsMap add method parameterized tests", () => {
    test.each([
        ["App le", "aelpp"],
        ["ca r", "acr"],
        ["javascript", "aacijprstv"],
        ["  ap ple   ", "aelpp"],
        ["N c i   e", "cein"],
        ["& msr", "&mrs"],
    ])(
        'should sort the characters of a word without whitespaces and uppercase characters',
        (originalWord: string, expectedWord: string) => {
            const sortedWord = sortWord(originalWord)

            expect(sortedWord).toBe(expectedWord)
        },
    );

})