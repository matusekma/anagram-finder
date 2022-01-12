import { sortWord } from "../stringHelpers"

class SortedStringToAnagramsMap extends Map<string, string[]> {
    
    getAnagrams(word: string): string[] {
        const sortedWord = sortWord(word)
        return this.get(sortedWord) || []
    }

    add(word: string) {
        const sortedWord = sortWord(word)
        let anagrams = this.get(sortedWord)
        if(anagrams) {
            anagrams.push(word)
        } else {
            anagrams = [word]
        }
        this.set(sortedWord, anagrams)
    }

}

export default SortedStringToAnagramsMap