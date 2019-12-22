function isLeapYear(year: number): boolean {
  const divisibleBy4: boolean = year % 4 == 0;
  const divisibleBy100: boolean = year % 100 == 0;
  const divisibleBy400: boolean = year % 400 == 0;

  return divisibleBy4 && !divisibleBy100 || divisibleBy400;
}

export default isLeapYear
