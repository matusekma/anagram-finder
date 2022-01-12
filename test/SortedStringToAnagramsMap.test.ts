import SortedStringToAnagramsMap from "../src/types/SortedStringToAnagramsMap";

describe("SortedStringToAnagramsMap add method parameterized tests", () => {
    test.each([
        [["App le", "apple", "ppAle"], "aelpp"],
        [["ca r", "car", "rac"], "acr"],
        [["tpaacsrivj", "javascript"], "aacijprstv"],
        [["  ap ple   ", "apple", "aelpp"], "aelpp"],
        [["ECIN", "nice", "n c i   e", "neic"], "cein"],
        [["&mrs", "& mrs"], "&mrs"],
    ])(
        'should add words to the correct sorted key in the map',
        (wordsToAdd: string[], expectedKey: string) => {
            const sortedStringToAnagramsMap: SortedStringToAnagramsMap = new SortedStringToAnagramsMap()

            wordsToAdd.forEach(word => sortedStringToAnagramsMap.add(word))

            expect(sortedStringToAnagramsMap.has(expectedKey)).toBe(true)
            const anagrams = sortedStringToAnagramsMap.get(expectedKey) || []
            expect(anagrams.length).toBe(wordsToAdd.length)
            expect(anagrams).toEqual(expect.arrayContaining(wordsToAdd));
        },
    );

})

describe("SortedStringToAnagramsMap getAnagrams method parameterized tests", () => {
    const dictionary = [
        "apple",
        "ppAle",
        "car",
        "rac",
        "javascript",
        "1234",
        "n c i   e",
        "neic",
        "& mrs",
        "'asd +",
        "nice"]
    const sortedStringToAnagramsMap: SortedStringToAnagramsMap = new SortedStringToAnagramsMap()
    dictionary.forEach(word => sortedStringToAnagramsMap.add(word))

    test.each([
        ["App le", ["apple", "ppAle"]],
        ["ca r", ["car", "rac",]],
        ["1234*", []],
        ["tpaacsrivj", ["javascript"]],
        ["  ap ple   ", ["apple", "ppAle"]],
        ["ECIN", ["nice", "n c i   e", "neic"]],
        ["&mrs", ["& mrs"]],
    ])(
        'should find all anagrams of a word',
        (inputWord: string, expectedAnagrams: string[]) => {
            const anagrams = sortedStringToAnagramsMap.getAnagrams(inputWord)

            expect(anagrams.length).toBe(expectedAnagrams.length)
            expect(anagrams).toEqual(expect.arrayContaining(expectedAnagrams));
        },
    );

})
