import { createCharMap } from "../src/anagramOperations";

describe("createCharMap parameterized tests", () => {
    const appleMap = new Map<string, number>([["a", 1], ["p", 2], ["l", 1], ["e", 1]])
    const carMap = new Map<string, number>([["c", 1], ["a", 1], ["r", 1]])
    const specialCharacterMap = new Map<string, number>([["&", 1], ["m", 1], ["r", 1], ["s", 1]])

    test.each([
        ["apple", appleMap],
        ["aPplE", appleMap],
        ["APpl  E", appleMap],
        ["car", carMap],
        ["c ar", carMap],
        ["& mrs", specialCharacterMap]
    ])(
        'should create character statistics from words correctly ignoring casing and whitespaces',
        (word: string, expectedMap: Map<string, number>) => {
            const charMap = createCharMap(word)

            expect(charMap.size).toBe(expectedMap.size)
            for (const [char, occurences] of charMap) {
                expect(occurences).toBe(expectedMap.get(char))
            }
        },
    );

})


