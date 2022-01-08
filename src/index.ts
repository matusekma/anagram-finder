import fs from "fs";
import readline from "readline"
import { findAnagrams, createCharMap } from "./anagramOperations";
import CharMapsByWord from "./types/CharMapsByWord";

var file = './src/assets/wordlist.txt';

const dictionaryCharMaps: CharMapsByWord = []

var fileReader = readline.createInterface({
    input: fs.createReadStream(file),
    output: process.stdout,
    terminal: false
});

const inputReader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

fileReader.on('line', function (line) {
    dictionaryCharMaps.push({ word: line, charMap: createCharMap(line) })
});

function waitForUserInputAndProcess() {
    inputReader.question("Type a word that you would like to search anagrams for or ':q' if you want to exit in vim style!\n", function (input) {
        if (input == ":q") {
            console.log("Bye!")
            inputReader.close()
        } else {
            const anagrams = findAnagrams(createCharMap(input), dictionaryCharMaps)
            console.log(`The anagrams found for "${input}" are:\n${anagrams.join(", ")}\n`)
            waitForUserInputAndProcess()
        }
    });
}

waitForUserInputAndProcess()