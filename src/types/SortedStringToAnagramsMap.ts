import { sortWord } from "../stringHelpers"

class SortedStringToAnagramsMap {
    private map: Map<string, string[]>

    constructor() {
        this.map = new Map()
    }

    getAnagrams(word: string): string[] {
        const sortedWord = sortWord(word)
        return this.map.get(sortedWord) || []
    }

    add(word: string) {
        const sortedWord = sortWord(word)
        let anagrams = this.map.get(sortedWord)
        if(anagrams) {
            anagrams.push(word)
        } else {
            anagrams = [word]
        }
        this.map.set(sortedWord, anagrams)
    }

}


export default SortedStringToAnagramsMap