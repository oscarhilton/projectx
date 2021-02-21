"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Stage_1 = __importDefault(require("./Stage"));
var GAFactory_1 = __importDefault(require("./GAFactory"));
var stage = new Stage_1.default("testStage");
var title = new GAFactory_1.default(300, "Artemis Harp", 0.01);
var subTitle = new GAFactory_1.default(150, "Defining greatness in deep tech leadership", 0.02);
function loopFrame() {
    title.run();
    subTitle.run();
    stage.clear();
    stage.drawTitle(title.getResultsArray());
    stage.drawSubtitle(subTitle.getResultsArray());
    window.requestAnimationFrame(loopFrame);
}
loopFrame();