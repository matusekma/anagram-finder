import CharMap from "./types/CharMap"
import CharMapsByWord from "./types/CharMapsByWord"


export function findAnagrams(inputWordCharMap: CharMap, dictionaryWordCharMaps: CharMapsByWord): string[] {
    const anagrams = []
    for (const dictionaryWordCharMap of dictionaryWordCharMaps) {
        if (areAnagrams(dictionaryWordCharMap.charMap, inputWordCharMap)) {
            anagrams.push(dictionaryWordCharMap.word)
        }
    }
    return anagrams
}

export function areAnagrams(dictionaryWordCharMap: CharMap, inputWordCharMap: CharMap): boolean {
    if (dictionaryWordCharMap.size !== inputWordCharMap.size) {
        return false
    }

    for (const [char, occurences] of inputWordCharMap) {
        if (dictionaryWordCharMap.get(char) !== occurences) {
            return false
        }
    }

    return true
}

export function createCharMap(word: string): CharMap {
    word = word.replaceAll(/\s+/g, "").toLowerCase()
    const charMap = new CharMap()
    for (const char of word) {
        charMap.add(char)
    }
    return charMap
}
