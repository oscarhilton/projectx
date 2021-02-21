import Stage from "./Stage";
import GAFactory from "./GAFactory";

const stage = new Stage("testStage");

const title = new GAFactory(300, "Artemis Harp", 0.01);
const subTitle = new GAFactory(150, "Defining greatness in deep tech leadership", 0.02);

function loopFrame() {
  title.run();
  subTitle.run();
  stage.clear();
  stage.drawTitle(title.getResultsArray());
  stage.drawSubtitle(subTitle.getResultsArray());
  window.requestAnimationFrame(loopFrame);
}

loopFrame();