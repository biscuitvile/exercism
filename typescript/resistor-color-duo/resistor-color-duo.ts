export class ResistorColor {
  private colors: string[];

  constructor(colors: Array<string>) {
    this.colors = colors;

    if (this.colors.length < 2) {
      throw new Error("At least two colors need to be present");
    }
  }

  lookup: { [color: string]: number} = {
    "black": 0,
    "brown": 1,
    "red": 2,
    "orange": 3,
    "yellow": 4,
    "green": 5,
    "blue": 6,
    "violet": 7,
    "grey": 8,
    "white": 9,
  }

  value(): number {
    const color1 = this.colors[0];
    const color2 = this.colors[1];

    const number1 = this.lookup[color1];
    const number2 = this.lookup[color2];

    return parseInt(`${number1}${number2}`);
  }
}
