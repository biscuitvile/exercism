class ReverseString {
  static reverse(input: string): string {
    if (input == "") return input;

    let chars: Array<string> = input.split("").map((_el, i) => {
      return input[input.length - (i + 1)];
    });

    return chars.join("");
  }
}

export default ReverseString
