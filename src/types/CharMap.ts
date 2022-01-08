class CharMap extends Map<string, number> {

    add(char: string) {
        let count = this.get(char)
        count = count ? count + 1 : 1
        this.set(char, count)
    }

}

export default CharMap;