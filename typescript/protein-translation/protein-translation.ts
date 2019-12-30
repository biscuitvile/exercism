class ProteinTranslation {
  static proteins(input: string) {
    let output: Array<string> = [];

    for (let i = 0; i < input.length; i += 3) {
      let slice = input.slice(i, i + 3);
      if ("UAA UAG UGA".includes(slice)) return output;

      let newOutput = this.lookupProtiens(slice, output);
      output = newOutput;
    }

    return output;
  }

  private static lookupProtiens(input: string, output: Array<string>) {
    const lookup: { [key: string]: string } = {
      "AUG": "Methionine",
      "UUU UUC": "Phenylalanine",
      "UUA UUG": "Leucine",
      "UCU UCC UCA UCG": "Serine",
      "UAU UAC": "Tyrosine",
      "UGU UGC": "Cysteine",
      "UGG": "Tryptophan"
    };

    Object.keys(lookup).forEach((key) => {
      if (key.includes(input)) {
        output.push(lookup[key]);
      }
    });

    return output;
  }
}

export default ProteinTranslation
