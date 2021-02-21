import Stage from "./Stage";
import GAFactory from "./GAFactory";

const stage = new Stage("mainStage");

const title = new GAFactory(300, "Artemis Harp", 0.01);
const subTitle = new GAFactory(200, "Defining greatness in deep tech leadership", 0.01);

function loopFrame(): void {
  title.run();
  subTitle.run();
  stage.clear();
  stage.drawTitle(title.getResultsArray());
  stage.drawSubtitle(subTitle.getResultsArray());
  window.requestAnimationFrame(loopFrame);
}

loopFrame();