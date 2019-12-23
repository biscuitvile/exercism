class Words {

  count(input: string): Map<string, number> {
    const inputs = input
    .trim()
    .replace(/\s+/, " ")
    .toLowerCase()
    .split(" ");

    let result = new Map;

    inputs.forEach((word) => {
      let count = 1;

      if (result.has(word)) count = count + result.get(word);

      result.set(word, count);
    });

    return result;
  }


}

export default Words
