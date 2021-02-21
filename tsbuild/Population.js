"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DNA_1 = __importDefault(require("./DNA"));
var Population = /** @class */ (function () {
    function Population(populationSize, target) {
        this.members = this.makePopulation(populationSize, target);
    }
    Population.prototype.makePopulation = function (populationSize, target) {
        var population = [];
        for (var i = 0; i < populationSize; i++) {
            population[i] = new DNA_1.default(target);
        }
        return population;
    };
    Population.prototype.makeResultsArray = function () {
        return this.members.map(function (dna) { return dna.getPhrase(); });
    };
    return Population;
}());
exports.default = Population;
