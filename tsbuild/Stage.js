"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var map_1 = __importDefault(require("./map"));
var CONTEXT = "2d";
var BACKGROUND = "#181A37";
var TEXT_PROPERTIES = {
    FONT_SIZE: {
        TITLE: "30px",
        SUBTITLE: "12px",
    },
    FONT_FAMILY: "Futurist",
    COLOUR_RGB: [169, 140, 83],
    TRANSPAENCY: 0.01,
    ALIGN: "center",
};
var Stage = /** @class */ (function () {
    function Stage(elementID) {
        this.canvas = document.getElementById(elementID);
        this.canvas.style.background = BACKGROUND;
        this.canvas.width = document.documentElement.clientWidth;
        this.canvas.height = document.documentElement.clientHeight;
        this.ctx = this.canvas.getContext(CONTEXT);
        window.addEventListener('resize', this.updateWindowSize.bind(this));
    }
    Stage.prototype.updateWindowSize = function () {
        if (this.canvas === null)
            return;
        this.canvas.width = document.documentElement.clientWidth;
        this.canvas.height = document.documentElement.clientHeight;
    };
    Stage.prototype.clear = function () {
        if (this.canvas === null)
            return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    };
    Stage.prototype.displayText = function (text, height, font, resultsSize) {
        if (this.canvas === null)
            return;
        var opacity = map_1.default(resultsSize, 0, resultsSize, 0, 1) / 100;
        this.ctx.save();
        this.ctx.font = font + " " + TEXT_PROPERTIES.FONT_FAMILY;
        this.ctx.fillStyle = "rgba(" + TEXT_PROPERTIES.COLOUR_RGB.join(", ") + ", " + opacity + ")";
        this.ctx.textAlign = TEXT_PROPERTIES.ALIGN;
        this.ctx.fillText(text, this.canvas.width / 2, height);
        this.ctx.restore();
    };
    Stage.prototype.drawTitle = function (resultsArray) {
        if (this.canvas === null)
            return;
        for (var _i = 0, resultsArray_1 = resultsArray; _i < resultsArray_1.length; _i++) {
            var result = resultsArray_1[_i];
            this.displayText(result, this.canvas.height / 2, TEXT_PROPERTIES.FONT_SIZE.TITLE, resultsArray.length);
        }
    };
    Stage.prototype.drawSubtitle = function (resultsArray) {
        if (this.canvas === null)
            return;
        for (var _i = 0, resultsArray_2 = resultsArray; _i < resultsArray_2.length; _i++) {
            var result = resultsArray_2[_i];
            this.displayText(result, this.canvas.height / 2 + 40, TEXT_PROPERTIES.FONT_SIZE.SUBTITLE, resultsArray.length);
        }
    };
    return Stage;
}());
exports.default = Stage;
