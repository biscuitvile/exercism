class SpaceAge {

  constructor(seconds: number) {
    this.seconds = seconds;
  }

  seconds: number = 0;

  onEarth(): number {
    return this.round(this.earthAge());
  };

  onMercury(): number {
    return this.round(this.earthAge() / 0.2408467);
  };

  onVenus(): number {
    return this.round(this.earthAge() / 0.61519726);
  };

  onMars(): number {
    return this.round(this.earthAge() / 1.8808158);
  };

  onJupiter(): number {
    return this.round(this.earthAge() / 11.862615);
  };

  onSaturn(): number {
    return this.round(this.earthAge() / 29.447498);
  };

  onUranus(): number {
    return this.round(this.earthAge() / 84.016846);
  };

  onNeptune(): number {
    return this.round(this.earthAge() / 164.79132);
  };

  private earthAge(): number {
    return this.seconds / 31557600;
  }

  private round(seconds: number): number {
    return Math.round(seconds * 100) / 100;
  }

}

export default SpaceAge
