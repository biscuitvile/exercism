export default class Triangle {

  sides: Array<number>;

  constructor(...sides: Array<number>) {
    this.sides = sides
  }

  kind() {
    if (this.illegalTriangle) throw new Error("triangle sides invalid");

    if (this.allEquivalentSides) {
      return "equilateral";
    } else if (this.twoEquivalentSides) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }

  get allEquivalentSides(): boolean {
    return this.distinceValues.length == 1;
  }

  get twoEquivalentSides(): boolean {
    return this.distinceValues.length == 2;
  }

  get distinceValues(): Array<number> {
    return [...new Set(this.sides)];
  }

  get illegalTriangle(): boolean {
    return this.illogicalSides || this.notAllPositive;
  }

  get illogicalSides(): boolean {
    let num1 = this.sides[0];
    let num2 = this.sides[1];
    let num3 = this.sides[2];

    return num1 + num2 < num3 || num2 + num3 < num1;
  }

  get notAllPositive(): boolean {
    return !this.sides.every((i) => { return i > 0 });
  }

}
