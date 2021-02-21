"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Population_1 = __importDefault(require("./Population"));
var MatingPool_1 = __importDefault(require("./MatingPool"));
var GAFactory = /** @class */ (function () {
    function GAFactory(populationSize, target, mutationRate) {
        this.population = new Population_1.default(populationSize, target);
        this.matingPool = new MatingPool_1.default(mutationRate);
    }
    GAFactory.prototype.run = function () {
        this.matingPool.assetFittness(this.population.members);
    };
    GAFactory.prototype.getResultsArray = function () {
        return this.population.makeResultsArray();
    };
    return GAFactory;
}());
exports.default = GAFactory;
