class Transcriptor {

  toRna(dna: string): string {
    return dna.split('').map((letter) => {
      if (this.lookup[letter]) {
        return this.lookup[letter];
      } else {
        throw new Error("Invalid input DNA.");
      }
    }).join('');
  }

  private lookup:{ [letter: string]: string } = {
    "G": "C",
    "C": "G",
    "T": "A",
    "A": "U"
  }

}

export default Transcriptor
