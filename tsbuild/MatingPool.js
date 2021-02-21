"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var DNA_1 = __importDefault(require("./DNA"));
var getRadomIntFromInterval_1 = __importDefault(require("./getRadomIntFromInterval"));
var MatingPool = /** @class */ (function () {
    function MatingPool(mutationRate) {
        this.pool = [];
        this.mutationRate = mutationRate;
    }
    MatingPool.prototype.assetFittness = function (population) {
        this.pool = [];
        var total = 0;
        for (var i = 0; i < population.length; i++) {
            var breedAmount = Math.floor(population[i].fitness() * 100);
            total += breedAmount;
            for (var j = 0; j < breedAmount; j++) {
                this.add(population[i]);
            }
        }
        for (var i = 0; i < population.length; i++) {
            if (this.pool.length) {
                population[i] = this.reproduce();
            }
            else {
                population[i] = new DNA_1.default(population[i].target);
            }
        }
    };
    MatingPool.prototype.add = function (dna) {
        this.pool.push(dna);
    };
    MatingPool.prototype.get = function (index) {
        return this.pool[index];
    };
    MatingPool.prototype.reproduce = function () {
        var a = getRadomIntFromInterval_1.default(0, this.pool.length - 1);
        var b = getRadomIntFromInterval_1.default(0, this.pool.length - 1);
        var parentA = this.pool[a];
        var parentB = this.pool[b];
        var child = parentA.crossOver(parentB);
        child.mutate(this.mutationRate);
        return child;
    };
    return MatingPool;
}());
exports.default = MatingPool;
