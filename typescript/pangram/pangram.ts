class Panagram {
  input: string = '';

  constructor(input: string) {
    this.input = input.toLowerCase();
  }

  isPangram(): boolean {
    const letters = this.input.split("");
    let unusedLetters = this.alphabet;

    letters.forEach((letter) => {
      if (unusedLetters.includes(letter)) {
        unusedLetters = unusedLetters.filter((el) => {
          return el != letter
        });
      }
    });

    return unusedLetters.length == 0;
  }

  private get alphabet(): Array<string> {
    return "abcdefghijklmnopqrstuvwxyz".split("");
  }
}

export default Panagram
