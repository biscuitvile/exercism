class Gigasecond {
  input: Date;

  constructor(input: Date) {
    this.input = input;
  }

  date(): Date {
    return new Date(this.input.getTime() + Math.pow(10, 9) * 1000);
  }

}

export default Gigasecond
