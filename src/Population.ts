import DNA from "./DNA";

export default class Population {
  members: DNA[];

  constructor (populationSize: number, target: string) {
    this.members = this.makePopulation(populationSize, target);
  }

  makePopulation(populationSize: number, target: string) {
    let population = [];
    for (var i = 0; i < populationSize; i++) {
      population[i] = new DNA(target);
    }
    return population;
  }

  makeResultsArray() {
    return this.members.map(dna => dna.getPhrase());
  }
}