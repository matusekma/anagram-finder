import { areAnagrams, createCharMap } from "../src/anagramOperations";
import CharMap from "../src/types/CharMap";

describe("areAnagrams parameterized tests", () => {

  test.each([
      [createCharMap("App le"), createCharMap("pepal"), true],
      [createCharMap("ca+r"), createCharMap("  +cr  a "), true],
      [createCharMap("4397*"), createCharMap("39*47"), true],
      [createCharMap("javascript"), createCharMap("tpaacsrivj"), true],
      [createCharMap("apple"), createCharMap("car"), false],
      [createCharMap("apple"), createCharMap("aplle"), false],
      [createCharMap("Ap ple"), createCharMap("aPLle"), false]
  ])(
      'should compare character maps of words correctly',
      (charMap1: CharMap, charMap2: CharMap, expectedOutcome: boolean) => {
          const outcome = areAnagrams(charMap1, charMap2)

          expect(outcome).toBe(expectedOutcome)
      },
  );

})
