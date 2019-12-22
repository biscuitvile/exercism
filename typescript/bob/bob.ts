class Bob {
  message = "";

  hey(message: string): string {
    this.message = message.trim();

    if (this.empty()) {
      return "Fine. Be that way!";
    }

    if (this.allUpperCase() && this.askingQuestion()) {
      return "Calm down, I know what I'm doing!";
    }

    if (this.askingQuestion()) {
      return "Sure.";
    }

    if (this.allUpperCase() && !this.noLetters()) {
      return "Whoa, chill out!";
    }

    return "Whatever.";
  }

  private empty(): boolean {
    return this.message == "";
  }

  private allUpperCase(): boolean {
    return this.message == this.message.toUpperCase() && !this.noLetters();
  }

  private askingQuestion(): boolean {
    return this.message[this.message.length - 1] == "?"
  }

  private noLetters(): boolean {
    return !(/[a-zA-Z]/.test(this.message));
  }
}

export default Bob
