import Population from "./Population";
import MatingPool from "./MatingPool";

export default class GAFactory {
  population: Population;
  matingPool: MatingPool;

  constructor(populationSize: number, target: string, mutationRate: number) {
    this.population = new Population(populationSize, target);
    this.matingPool = new MatingPool(mutationRate);
  }

  run(): void {
    this.matingPool.assetFittness(this.population.members);
  }

  getResultsArray(): string[] {
    return this.population.makeResultsArray();
  }
}