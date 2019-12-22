class Transcriptor {
  toRna(input: string): string {
    const letters = Array.from(input);

    const lookup: { [letter: string]: string } = {
      "G": "C",
      "C": "G",
      "T": "A",
      "A": "U"
    }

    let allowedInputs: Array<string> = Object.getOwnPropertyNames(lookup);
    let translatedLetters: Array<string> = [];

    letters.forEach((letter) => {
      if (!allowedInputs.includes(letter)) {
        throw new Error("Invalid input DNA.");
      }

      translatedLetters.push(lookup[letter]);
    });

    return translatedLetters.join("");
  }
}

export default Transcriptor
