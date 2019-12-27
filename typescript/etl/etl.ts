
interface legacyType { [key: string]: Array<string> }
interface outputType { [key: string]: number }

function transform(input: legacyType): outputType {
  let output: outputType = {};

  Object.keys(input).forEach((key) => {
    let letters = input[key];

    letters.forEach((letter) => {
      letter = letter.toLowerCase();
      output[letter] = parseInt(key);
    });
  });

  return output;
}

export default transform
