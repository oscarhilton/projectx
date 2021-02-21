import getRandomIntFromInterval from "./getRadomIntFromInterval";

export default class DNA {
  target: string;
  genes: string[]
  fitnessScore: number;

  constructor(target: string) {
    this.target = target;
    this.genes = [];
    this.fitnessScore = 0;

    for (var i = 0; i < target.length; i++) {
      this.genes[i] = this.newRandomCharacter();
    }
  }

  newRandomCharacter(): string {
    return String.fromCharCode(getRandomIntFromInterval(32, 128));
  }

  fitness(): number {
    let score = 0;
    for (var i = 0; i < this.genes.length; i++) {
      if (this.genes[i] === this.target.charAt(i)) {
        score++;
      }
    }
    const correct = score / this.target.length;
    this.fitnessScore = correct * correct;
    return this.fitnessScore;
  }

  crossOver(partner: DNA): DNA {
    const child = new DNA(this.target);
    const midpoint = getRandomIntFromInterval(0, this.target.length);
    for (var i = 0; i < this.genes.length; i++) {
      if (i > midpoint) {
        child.genes[i] = this.genes[i];
      } else {
        child.genes[i] = partner.genes[i];
      }
    }
    return child;
  }

  mutate(mutationRate: number): void {
    for (var i = 0; i < this.genes.length; i++) {
      if (Math.random() < mutationRate) {
        this.genes[i] = this.newRandomCharacter();
      }
    }
  }

  getPhrase(): string {
    return this.genes.join("").toUpperCase();
  }
}