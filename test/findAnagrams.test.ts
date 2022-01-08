import { createCharMap, findAnagrams } from "../src/anagramOperations";
import CharMap from "../src/types/CharMap";

const createDictionaryCharMap = (dictionary: string[]) =>
    dictionary.map(word => ({ word: word, charMap: createCharMap(word) }))

describe("findAnagrams parameterized tests", () => {
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
    const dictionaryCharMaps = createDictionaryCharMap(dictionary)

    test.each([
        [createCharMap("App le"), ["apple", "ppAle"]],
        [createCharMap("ca r"), ["car", "rac",]],
        [createCharMap("1234*"), []],
        [createCharMap("tpaacsrivj"), ["javascript"]],
        [createCharMap("  ap ple   "), ["apple", "ppAle"]],
        [createCharMap("ECIN"), ["nice", "n c i   e", "neic"]],
        [createCharMap("&mrs"), ["& mrs"]],
    ])(
        'should find all anagrams of a word in a dictionary using character maps',
        (inputWordCharMap: CharMap, expectedAnagrams: string[]) => {
            const anagrams = findAnagrams(inputWordCharMap, dictionaryCharMaps)

            expect(anagrams.length).toBe(expectedAnagrams.length)
            expect(anagrams).toEqual(expect.arrayContaining(expectedAnagrams));
        },
    );

})


