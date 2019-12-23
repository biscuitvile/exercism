class Squares {
  input: number = 0;

  constructor(input: number) {
    this.input = input;
  }

  get squareOfSum(): number {
    let arr = Array.from(Array(this.input + 1).keys())
    let sum = arr.reduce((a, b) => a + b, 0);

    return Math.pow(sum, 2)
  }

  get sumOfSquares(): number {
    let arr = Array.from(Array(this.input + 1).keys())
    let squares = arr.map((i) => { return Math.pow(i, 2); });

    let sum = squares.reduce((a, b) => a + b, 0);

    return sum;
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares;
  }

}

export default Squares
