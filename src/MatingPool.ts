import DNA from "./DNA";
import getRandomIntFromInterval from "./getRadomIntFromInterval";

export default class MatingPool {
  pool: DNA[];
  mutationRate: number;

  constructor(mutationRate: number) {
    this.pool = [];
    this.mutationRate = mutationRate;
  }

  assetFittness(population: DNA[]): void {
    this.pool = [];
    let total = 0;
    for (var i = 0; i < population.length; i++) {
      const breedAmount = Math.floor(population[i].fitness() * 100);
      total += breedAmount;
      for (var j = 0; j < breedAmount; j++) {
        this.add(population[i]);
      }
    }
    for (var i = 0; i < population.length; i++) {
      if (this.pool.length) {
        population[i] = this.reproduce();
      } else {
        population[i] = new DNA(population[i].target);
      }
    }
  }

  add(dna: DNA): void {
    this.pool.push(dna);
  }
  
  get(index: number): DNA{
    return this.pool[index];
  }

  reproduce(): DNA {
    const a = getRandomIntFromInterval(0, this.pool.length - 1);
    const b = getRandomIntFromInterval(0, this.pool.length - 1);

    const parentA = this.pool[a];
    const parentB = this.pool[b];

    const child = parentA.crossOver(parentB);
    child.mutate(this.mutationRate);

    return child;
  }
}