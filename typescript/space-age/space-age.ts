class SpaceAge {
  age!: number;

  constructor(age: number) {
    this.age = age;
  }

  lookup: { [index: string]: number } = {
    "earth": 31557600,
    "mercury": 0.2408467,
    "venus": 0.61519726,
    "mars": 1.8808158,
    "jupiter": 11.862615,
    "saturn": 29.447498,
    "uranus": 84.016846,
    "neptune": 164.79132,
  }

  get seconds(): number {
    return this.age;
  }

  onEarth(): number {
    return this.divide(1);
  }

  onMercury(): number {
    return this.divide(this.lookup["mercury"]);
  }

  onVenus(): number {
    return this.divide(this.lookup["venus"]);
  }

  onMars(): number {
    return this.divide(this.lookup["mars"]);
  }

  onJupiter(): number {
    return this.divide(this.lookup["jupiter"]);
  }

  onSaturn(): number {
    return this.divide(this.lookup["saturn"]);
  }

  onUranus(): number {
    return this.divide(this.lookup["uranus"]);
  }

  onNeptune(): number {
    return this.divide(this.lookup["neptune"]);
  }

  private earthSeconds(): number {
    return this.seconds / this.lookup["earth"];
  }

  private divide(a: number): number {
    return Number((this.earthSeconds() / a).toFixed(2));
  }
}

export default SpaceAge
