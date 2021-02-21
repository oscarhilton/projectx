"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var getRadomIntFromInterval_1 = __importDefault(require("./getRadomIntFromInterval"));
var DNA = /** @class */ (function () {
    function DNA(target) {
        this.target = target;
        this.genes = [];
        this.fitnessScore = 0;
        for (var i = 0; i < target.length; i++) {
            this.genes[i] = this.newRandomCharacter();
        }
    }
    DNA.prototype.newRandomCharacter = function () {
        return String.fromCharCode(getRadomIntFromInterval_1.default(32, 128));
    };
    DNA.prototype.fitness = function () {
        var score = 0;
        for (var i = 0; i < this.genes.length; i++) {
            if (this.genes[i] === this.target.charAt(i)) {
                score++;
            }
        }
        var correct = score / this.target.length;
        this.fitnessScore = correct * correct;
        return this.fitnessScore;
    };
    DNA.prototype.crossOver = function (partner) {
        var child = new DNA(this.target);
        var midpoint = getRadomIntFromInterval_1.default(0, this.target.length);
        for (var i = 0; i < this.genes.length; i++) {
            if (i > midpoint) {
                child.genes[i] = this.genes[i];
            }
            else {
                child.genes[i] = partner.genes[i];
            }
        }
        return child;
    };
    DNA.prototype.mutate = function (mutationRate) {
        for (var i = 0; i < this.genes.length; i++) {
            if (Math.random() < mutationRate) {
                this.genes[i] = this.newRandomCharacter();
            }
        }
    };
    DNA.prototype.getPhrase = function () {
        return this.genes.join("").toUpperCase();
    };
    return DNA;
}());
exports.default = DNA;
