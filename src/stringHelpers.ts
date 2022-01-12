export function sortWord(word: string): string {
    word = word.replaceAll(/\s+/g, "").toLowerCase()
    return word.split("").sort().join("")
}
